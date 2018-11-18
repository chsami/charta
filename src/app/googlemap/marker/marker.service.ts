import { MarkerStateEnum } from './../enum/marker.enum';
import { MarkerModule } from './marker.module';
import { Injectable } from '@angular/core';
import { Marker } from './models/marker';

@Injectable({
    providedIn: MarkerModule
})
export class MarkerService {
    private selectedMarker: Marker;
    private _markers: Marker[] = [];

    public get markers(): Marker[] {
        return this._markers;
    }

    constructor(private googleMapsService: GoogleMapsService) {}

    public init() {
        const overlay = new google.maps.OverlayView();
        overlay.draw = function() {
            this.getPanes().markerLayer.id = 'markerLayer';
        };
        overlay.setMap(this.googleMapsService.map);
    }

    public addMarkerOnClick() {
        google.maps.event.addListener(
            this.googleMapsService.map,
            'click',
            event => {
                const marker = new Marker(this, {
                    position: event.latLng,
                    map: this.googleMapsService.map,
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
                this.googleMapsService.map.panTo(this.getLast().getPosition());
            }
        );
    }

    public getGeocodeFromSelectedMarker(): google.maps.LatLng {
        return this.selectedMarker.getPosition();
    }

    public registerMarkerClick(marker: Marker): void {
        marker.addListener('click', event => {
            this.setSelectedMarker(marker);
            this.googleMapsService.getAddressFromGeocode(marker.getPosition());
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
}
