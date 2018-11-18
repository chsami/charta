import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsService } from './googlemaps.service';
import { Marker } from './models/marker';

/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
/// <reference path="../../../node_modules/@types/markerclustererplus/index.d.ts" />
/// <reference path="../../../node_modules/@types/hammerjs/index.d.ts" />

@Component({
    selector: 'app-googlemaps',
    templateUrl: './googlemaps.component.html',
    styleUrls: ['./googlemaps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
    @ViewChild('map') mapElement: ElementRef;

    constructor(private googleMapsService: GoogleMapsService) {}


    ngOnInit(): void {
        const mydiv: HTMLElement = document.getElementById('lol');
        this.googleMapsService
            .registerGesture(['pinch', 'rotate', 'pan'], mydiv)
            .then((hammer: HammerManager) => {
                if (hammer) {
                    hammer.on('pinch rotate pan', event => {
                        this.googleMapsService.presentToast(
                            event.scale.toString()
                        );
                    });
                }
            });
        const lat: number = -34.929;
        const long: number = 138.601;
        this.googleMapsService.init(this.mapElement, lat, long);
    }

    test(event) {
        console.log('cool');
        this.googleMapsService.presentToast('cool');
    }


    public rotateMarker(clockwise: boolean): void {
        this.googleMapsService.rotateMarker(clockwise);
    }

    public deleteMarker() {
        this.googleMapsService.deleteMarker();
    }

    public get selectedMarker(): Marker {
        return this.selectedMarker;
    }

    public saveMarker() {
        const marker = new Marker(this.googleMapsService, {
            position: this.googleMapsService.getMarkerInCreationState.getPosition(),
            map: this.googleMapsService.map,
            clickable: true
        });
        this.googleMapsService.saveMarker();
    }

    public markerInCreationState(): Marker {
        return this.googleMapsService.getMarkerInCreationState;
    }
}
