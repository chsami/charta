
import { MarkerService } from '../marker.service';

export class Marker extends google.maps.Marker {

    public rotate?: number = 0;

    /**
     *
     */
    constructor(markerService: MarkerService, opts?: google.maps.MarkerOptions) {
        super(opts);
    }
}
