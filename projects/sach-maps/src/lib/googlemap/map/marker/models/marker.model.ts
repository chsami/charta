
import { MarkerStateEnum } from '../enum/marker.enum';
import { MarkerService } from '../marker.service';

export class Marker extends google.maps.Marker {

    public state: MarkerStateEnum = MarkerStateEnum.IDLE;
    public rotate?: number = 0;

    /**
     *
     */
    constructor(markerService: MarkerService, opts?: google.maps.MarkerOptions) {
        super(opts);
        this.addListener('click', event => {
            markerService.setSelectedMarker(this);
        });
    }
}
