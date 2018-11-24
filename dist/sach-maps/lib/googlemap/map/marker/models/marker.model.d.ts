/// <reference types="googlemaps" />
import { MarkerStateEnum } from '../enum/marker.enum';
import { MarkerService } from '../marker.service';
export declare class Marker extends google.maps.Marker {
    state: MarkerStateEnum;
    rotate?: number;
    /**
     *
     */
    constructor(markerService: MarkerService, opts?: google.maps.MarkerOptions);
}
