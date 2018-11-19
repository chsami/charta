/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { MarkerStateEnum } from '../enum/marker.enum';
export class Marker extends google.maps.Marker {
    /**
     *
     * @param {?} markerService
     * @param {?=} opts
     */
    constructor(markerService, opts) {
        super(opts);
        this.state = MarkerStateEnum.IDLE;
        this.rotate = 0;
        this.addListener('click', event => {
            markerService.setSelectedMarker(this);
        });
    }
}
if (false) {
    /** @type {?} */
    Marker.prototype.state;
    /** @type {?} */
    Marker.prototype.rotate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FjaC1tYXBzLyIsInNvdXJjZXMiOlsibGliL2dvb2dsZW1hcC9tYXAvbWFya2VyL21vZGVscy9tYXJrZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU10RCxNQUFNLGFBQWMsU0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7OztJQVExQyxZQUFZLGFBQTRCLEVBQUUsSUFBZ0M7UUFDdEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQVBnQixlQUFlLENBQUMsSUFBSTtzQkFDM0IsQ0FBQztRQU90QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUM5QixhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDO0tBQ047Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBNYXJrZXJTdGF0ZUVudW0gfSBmcm9tICcuLi9lbnVtL21hcmtlci5lbnVtJztcclxuaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gJy4uL21hcmtlci5zZXJ2aWNlJztcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiZ29vZ2xlbWFwc1wiIC8+XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtlciBleHRlbmRzIGdvb2dsZS5tYXBzLk1hcmtlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRlOiBNYXJrZXJTdGF0ZUVudW0gPSBNYXJrZXJTdGF0ZUVudW0uSURMRTtcclxuICAgIHB1YmxpYyByb3RhdGU/OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWFya2VyU2VydmljZTogTWFya2VyU2VydmljZSwgb3B0cz86IGdvb2dsZS5tYXBzLk1hcmtlck9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbWFya2VyU2VydmljZS5zZXRTZWxlY3RlZE1hcmtlcih0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=