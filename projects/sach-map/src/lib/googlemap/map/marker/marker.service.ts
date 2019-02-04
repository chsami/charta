import { MarkerModule } from './marker.module';
import { Marker } from './models/marker.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {
    private _markers: Marker[] = [];

    private _markerCluster: MarkerClusterer;

    public get markers(): Marker[] {
        return this._markers;
    }

    public get markerCluster(): MarkerClusterer {
        return this._markerCluster;
    }

    constructor() {}

    public createCluster(map: google.maps.Map, options: MarkerClustererOptions) {
        this._markerCluster = new MarkerClusterer(map, this.markers, options);

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
        google.maps.event.addListener(map, 'click', event => {
            marker.setPosition(event.latLng);
            this.markerCluster.addMarker(marker);
            this.addMarker(marker);
            map.panTo(this.getLast().getPosition());
        });
        return marker;
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

    public addMarker(marker: Marker) {
        this._markers.push(marker);
    }

    public rotateMarker(marker: Marker, clockwise: boolean): void {
        const markerIndex = this._markers.findIndex(
            x => x === marker
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

    public deleteMarker(marker?: Marker): void {
        let _marker: Marker;
        let _index: number;
        if (marker != null) {
            _marker = marker;
            _index = this._markers.findIndex(x => x === marker);
        } else {
            _marker = this._markers[this._markers.length - 1];
            _index = this.countMarkers() - 1;
        }
        this._markers = this._markers.slice(0, _index);
        _marker.setMap(null);
    }

    public hideMarkers(): void {
        for (const marker of this.markers) {
            marker.setMap(null);
        }
    }

    public hideClusterMarkers() {
        for (const marker of this.markerCluster.getMarkers()) {
            marker.setMap(null);
        }
    }

    public hideClusterMarker(marker: Marker) {
        this.markerCluster.getMarkers().find(x => x === marker).setMap(null);
    }

    public hideMarker(marker: Marker): void {
        marker.setMap(null);
    }

    public clearMarkers() {
        this._markers = [];
    }


}
