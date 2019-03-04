import {
    Injectable,
    ElementRef,
    InjectionToken,
    Optional,
    Inject
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapModule } from './map.module';
import { Observable } from 'rxjs/internal/Observable';
import { IMapsConfig } from './models/maps.config.interface';
import { GoogleMaps } from './models/google-map.model';
import { GoogleMapsOptions } from './models/google-map-options.interface';

export const MapsConfig = new InjectionToken<IMapsConfig>('MAPS_CONFIG');

@Injectable({
    providedIn: 'root'
})
export class MapService {

    private _map: GoogleMaps;
    private _key: string;
    private zooming: boolean;

    constructor(
        private http: HttpClient,
        @Optional() @Inject(MapsConfig) config: IMapsConfig = null
    ) {
        if (config) {
            this._key = config.key;
        }
    }

    public get map(): GoogleMaps {
        return this._map;
    }

    public get key(): string {
        return this._key;
    }

    /**
     * Loadmap
     * @param mapElement html map elemnt
     */
    public init(
        mapElement: ElementRef,
        mapOptions: GoogleMapsOptions,
        key: string = '',
    ): GoogleMaps {
        if (key) {
            this._key = key;
        }

        this._map = new GoogleMaps(mapElement.nativeElement, mapOptions);
        if (mapOptions.compassImage != null) {
            this.addCompass(mapOptions.compassImage);
        }

        const overlay = new google.maps.OverlayView();
        overlay.draw = function () {
            this.getPanes().markerLayer.id = 'markerLayer';
        };
        overlay.setMap(this.map);
        if (mapOptions.smoothZoom) {
            google.maps.event.addDomListener(this.map.getDiv(), 'mousewheel', event => this.smoothZoom(event));
        }

        return this.map;
    }

    // GEOCODING

    public getGeocodeFromAddress(address: string): Observable<any> {
        return this.http.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
            this.key
            }`
        );
    }

    public async getAddressFromGeocode(
        location: google.maps.LatLng
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const geocoder = new google.maps.Geocoder();
            const latlng = location;
            let address: google.maps.GeocoderResult;
            geocoder.geocode({ location: latlng }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    address = results[0];
                    resolve(address.formatted_address);
                }
            });
        });
    }

    // Compass

    addCompass(compassImage: string) {
        const div = document.createElement('div');
        let icon: string = '';
        icon = compassImage.length > 0 ? compassImage : 'assets/compass.png';
        div.innerHTML = '<img style="margin: 10px" src="' + icon + '"> ';
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);
    }

    getCurrentPosition(opts: PositionOptions): Promise<Position> {
        const options = {
            enableHighAccuracy: opts.enableHighAccuracy,
            timeout: opts.timeout,
            maximumAge: opts.maximumAge
        };
        return new Promise<Position>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    public smoothZoom(event) {
        event.preventDefault();
        if (!this.zooming) {
            this.zooming = true;
            const z = (event.wheelDelta > 0 || event.detail < 0) ? 1 : -1;
            this.map.setZoom(Math.max(0, Math.min(22, this.map.getZoom() + z)));
            if (Math.max(0, Math.min(22, this.map.getZoom() + z)) === 21) {
                this.zooming = false;
            }
            google.maps.event.addListenerOnce(this.map, 'idle', () => {
                this.zooming = false;
            });
        }
    }

}
