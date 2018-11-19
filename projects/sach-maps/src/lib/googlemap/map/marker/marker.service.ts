import { MarkerModule } from './marker.module';
import { Marker } from './models/marker.model';
import { Injectable } from '@angular/core';
import { MarkerStateEnum } from './enum/marker.enum';

/// <reference types="googlemaps" />

@Injectable({
    providedIn: MarkerModule
})
export class MarkerService {
    private selectedMarker: Marker;
    private _markers: Marker[] = [];

    private _markerCluster: MarkerClusterer;

    public get markers(): Marker[] {
        return this._markers;
    }

    public get markerCluster(): MarkerClusterer {
        return this._markerCluster;
    }

    constructor() {

    }

    public createCluster(map: google.maps.Map) {
        this._markerCluster = new MarkerClusterer(
            map,
            this.markers
        );

        this.markerCluster.setMaxZoom(16);
    }

    public registerMarkerOnClick(map: google.maps.Map) {
        const marker = new Marker(this, {
            position: new google.maps.LatLng(-1, -1),
            map: map,
            draggable: true,
            clickable: true
            // icon: {
            //   url: "assets/img/target_sami_medium.png",
            //   origin: new google.maps.Point(0, 0),
            //   scaledSize: new google.maps.Size(250, 250)
            // }
        });
        google.maps.event.addListener(
            map,
            'click',
            event => {
                marker.setPosition(event.latLng);
                this.markerCluster.addMarker(marker);
                this.addMarker(marker);
                map.panTo(this.getLast().getPosition());
            }
        );
        return marker;
    }

    public getGeocodeFromSelectedMarker(): google.maps.LatLng {
        return this.selectedMarker.getPosition();
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
}
