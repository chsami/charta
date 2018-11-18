import { MarkerService } from './marker.service';
import { GoogleMapsService } from './../googlemaps.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MarkerClusterService {

    constructor(private googleMapsService: GoogleMapsService, private markerService: MarkerService) {
        const markerCluster = new MarkerClusterer(
            this.googleMapsService.map,
            this.markerService.markers
        );

        markerCluster.setMaxZoom(16);
    }
}
