import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapModule } from './map.module';
import { Observable } from 'rxjs/internal/Observable';

/// <reference types="googlemaps" />

@Injectable({
    providedIn: MapModule
})
export class MapService {
    private _map: google.maps.Map;
    private _key: string;


    constructor(
        private http: HttpClient
    ) { }

    public get map(): google.maps.Map {
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
        mapOptions: google.maps.MapOptions,
        compass: boolean,
        key: string
    ): google.maps.Map {
        this._key = key;
        
        this._map = new google.maps.Map(mapElement.nativeElement, mapOptions);
        if (compass) {
            this.addCompass();
        }

        const overlay = new google.maps.OverlayView();
        overlay.draw = function () {
            this.getPanes().markerLayer.id = 'markerLayer';
        };
        overlay.setMap(this.map);

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

    addCompass() {
        const div = document.createElement('div');
        const icon =
            'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);
    }

}
