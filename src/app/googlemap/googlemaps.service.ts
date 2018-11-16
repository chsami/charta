import { environment } from '../../environments/environment';
import { Marker } from './models/marker';
import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarkerStateEnum } from './enum/marker.enum';
import { ToastController } from '@ionic/angular';

import 'hammerjs';

/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
/// <reference path="../../../node_modules/@types/hammerjs/index.d.ts" />

@Injectable()
export class GoogleMapsService {
    private _map: google.maps.Map;
    private selectedMarker: Marker;
    private _markers: Marker[] = [];

    constructor(
        private http: HttpClient,
        private toastController: ToastController
    ) {}

    public get map(): google.maps.Map {
        return this._map;
    }

    /**
     * Loadmap
     * @param mapElement html map elemnt
     */
    public init(
        mapElement: ElementRef,
        startLat: number,
        startLong: number
    ): void {
        const latLng = new google.maps.LatLng(startLat, startLong);

        const mapOptions: google.maps.MapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            // rotateControl: true,
            // tilt: 45,
            // panControl: true,
            disableDefaultUI: true
            // rotateControlOptions: {
            //   position: google.maps.ControlPosition.RIGHT_CENTER
            // }
        };

        this._map = new google.maps.Map(mapElement.nativeElement, mapOptions);

        const markerCluster = new MarkerClusterer(this.map, this._markers);

        markerCluster.setMaxZoom(16);

        const overlay = new google.maps.OverlayView();
        overlay.draw = function() {
            this.getPanes().markerLayer.id = 'markerLayer';
        };
        overlay.setMap(this.map);

        google.maps.event.addListener(this.map, 'click', event => {
            const marker = new Marker(this, {
                position: event.latLng,
                map: this.map,
                draggable: true,
                clickable: true
                // icon: {
                //   url: "assets/img/target_sami_medium.png",
                //   origin: new google.maps.Point(0, 0),
                //   scaledSize: new google.maps.Size(250, 250)
                // }
            });
            markerCluster.addMarker(marker);
            this.addMarker(marker);
            this.map.panTo(this.getLast().getPosition());
        });
        this.addCompass();
    }

    // GEOCODING

    public getGeocodeFromAddress(address: string): Observable<any> {
        return this.http.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
                environment.GOOGLE_MAPS_API_KEY
            }`
        );
    }

    public getGeocodeFromSelectedMarker(): google.maps.LatLng {
        return this.selectedMarker.getPosition();
    }

    public async getAddressFromGeocode(
        location: google.maps.LatLng
    ): Promise<string> {
        const geocoder = new google.maps.Geocoder();
        const latlng = location;
        let address: google.maps.GeocoderResult;
        geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
                address = results[0];
                this.presentToast(address.formatted_address);
            }
        });
        return address.formatted_address;
    }

    // MISC

    async presentToast(message: string): Promise<void> {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }

    // MARKER Functionality

    public registerMarkerClick(marker: Marker): void {
        marker.addListener('click', event => {
            this.setSelectedMarker(marker);
            this.getAddressFromGeocode(marker.getPosition());
        });
    }

    public findByIndex(index: number): Marker {
        if (this._markers[index]) {
            return this._markers[index];
        }
        return null;
    }

    public getLast(): Marker {
        return this._markers[this._markers.length - 1];
    }

    public countMarkers(): number {
        return this._markers.length;
    }

    public setSelectedMarker(marker: Marker): void {
        this.selectedMarker = this._markers.find(x => x === marker);
    }

    public get getMarkerInCreationState(): Marker {
        return this._markers.find(x => x.state === MarkerStateEnum.CREATION);
    }

    public addMarker(marker: Marker) {
        marker.state = MarkerStateEnum.CREATION;
        this._markers.push(marker);
        this.selectedMarker = marker;
    }

    public rotateMarker(clockwise: boolean): void {
        const markerIndex = this._markers.findIndex(
            x => x === this.selectedMarker
        );
        const elements: NodeListOf<Element> = document.querySelectorAll(
            '#markerLayer img'
        );
        const element: any = elements[markerIndex];
        if (clockwise) {
            this._markers[markerIndex].rotate += 7;
            element.style.transform =
                'rotate(' + this._markers[markerIndex].rotate + 'deg)';
        } else {
            this._markers[markerIndex].rotate -= 7;
            element.style.transform =
                'rotate(' + this._markers[markerIndex].rotate + 'deg)';
        }
    }

    public deleteMarker(): void {
        const marker: Marker = this._markers[this._markers.length - 1];
        if (marker.state === MarkerStateEnum.CREATION) {
            marker.setMap(null);
            this._markers = this._markers.slice(0, this.countMarkers() - 1);
            this.selectedMarker = null;
        }
    }

    public hideMarker(marker: Marker): void {
        marker.setMap(null);
    }

    public saveMarker(): void {
        const marker: Marker = this.getLast();
        marker.state = MarkerStateEnum.IDLE;
        this.selectedMarker = null;
    }

    // Gestures

    /**
     * Registering gestures because of: https://github.com/ionic-team/ionic/issues/14883
     * @param names names of the gestures
     * @param element Html element to apply gestures on
     */
    async registerGesture(
        names: string[],
        element: HTMLElement
    ): Promise<HammerManager> {
        if (element) {
            const hammerManager = new Hammer.Manager(element);
            await names.forEach(name => {
                switch (name) {
                    case 'pinch':
                        hammerManager.add(new Hammer.Pinch({ event: 'pinch' }));
                        break;
                    case 'rotate':
                        hammerManager.add(
                            new Hammer.Pinch({ event: 'rotate' })
                        );
                        break;
                    case 'pan':
                        hammerManager.add(new Hammer.Pinch({ event: 'pan' }));
                        break;
                }
            });
            return hammerManager;
        }
        return null;
    }

    // Compass

    addCompass() {
        const div = document.createElement('div');
        const icon =
            'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);
    }
}
