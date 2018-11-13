


import { MarkerStateEnum } from '../enum/marker.enum';
import { GoogleMapsService } from '../googlemaps.service';

/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />


export class Marker extends google.maps.Marker {

    public state: MarkerStateEnum = MarkerStateEnum.IDLE;
    public rotate?: number = 0;

    /**
     *
     */
    constructor(markers: GoogleMapsService, opts?: google.maps.MarkerOptions) {
        super(opts);
        this.addListener('click', (event) => {
            markers.setSelectedMarker(this);
        });
    }
}
