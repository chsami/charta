import { environment } from '../../environments/environment';
import { Marker } from './models/marker';
import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarkerStateEnum } from './enum/marker.enum';
import { ToastController } from '@ionic/angular';


/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

@Injectable()
export class GoogleMapsService {
    private _map: google.maps.Map;


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

    // Compass

    addCompass() {
        const div = document.createElement('div');
        const icon =
            'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);
    }
}
