import { environment } from '../../environments/environment';
import { Marker } from './models/marker';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarkerStateEnum } from './enum/marker.enum';

/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

@Injectable()
export class GoogleMapsService {
    map: google.maps.Map;
    selectedMarker: number = -1;
    _markers: Marker[] = [];
    markersSubject: BehaviorSubject<Marker[]> = new BehaviorSubject([]);
    markers$: Observable<Marker[]>;

    constructor(private http: HttpClient) {
        this.markersSubject = new BehaviorSubject(this._markers);
        this.markers$ = this.markersSubject.asObservable();
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
        this.selectedMarker = this._markers.findIndex(x => x === marker);
    }

    public get getMarkerInCreationState(): Marker {
        return this._markers.find(x => x.state === MarkerStateEnum.CREATION);
    }

    public addMarker(marker: Marker) {
        marker.state = MarkerStateEnum.CREATION;
        this._markers.push(marker);
        this.selectedMarker = this._markers.length - 1;
        this.markersSubject.next([...this._markers]);
    }

    public rotateMarker(clockwise: boolean): void {
        const elements: NodeListOf<Element> = document.querySelectorAll(
            '#markerLayer img'
        );
        const element: any = elements[this.selectedMarker];
        if (clockwise) {
            this._markers[this.selectedMarker].rotate += 7;
            element.style.transform =
                'rotate(' + this._markers[this.selectedMarker].rotate + 'deg)';
        } else {
            this._markers[this.selectedMarker].rotate -= 7;
            element.style.transform =
                'rotate(' + this._markers[this.selectedMarker].rotate + 'deg)';
        }
    }

    public deleteMarker() {
        const marker: Marker = this._markers[this._markers.length - 1];
        if (marker.state === MarkerStateEnum.CREATION) {
            marker.setMap(null);
            this._markers = this._markers.slice(0, this.countMarkers() - 1);
            this.markersSubject.next([...this._markers]);
            this.selectedMarker = -1;
        }
    }

    public hideMarker(marker: Marker) {
        marker.setMap(null);
    }

    public saveMarker() {
        const marker: Marker = this.getLast();
        marker.state = MarkerStateEnum.IDLE;
        this.selectedMarker = -1;
    }

    public getGeocodeFromAddress(address: string) {
        return this.http.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
                environment.GOOGLE_MAPS_API_KEY
            }`
        );
    }

    public getAddressFromGeocode(lat: number, long: number) {}
}
