import { MarkerService } from './../providers/marker.service';



import { MarkerStateEnum } from '../enum/marker.enum';
import { GoogleMapsService } from '../googlemaps.service';

/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />


export class Marker extends google.maps.Marker {

    public state: MarkerStateEnum = MarkerStateEnum.IDLE;
    public rotate?: number = 0;

    /**
     *
     */
    constructor(markerService: MarkerService, opts?: google.maps.MarkerOptions) {
        super(opts);
        markerService.registerMarkerClick(this);
    }
}
