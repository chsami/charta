/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FjaC1tYXAvIiwic291cmNlcyI6WyJsaWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvbW9kZWxzL21hcmtlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3RELE1BQU0sYUFBYyxTQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozs7O0lBUTFDLFlBQVksYUFBNEIsRUFBRSxJQUFnQztRQUN0RSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFQVCxVQUFLLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDOUMsV0FBTSxHQUFZLENBQUMsQ0FBQztRQU92QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUM5QixhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7OztJQVpHLHVCQUFxRDs7SUFDckQsd0JBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE1hcmtlclN0YXRlRW51bSB9IGZyb20gJy4uL2VudW0vbWFya2VyLmVudW0nO1xyXG5pbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbWFya2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtlciBleHRlbmRzIGdvb2dsZS5tYXBzLk1hcmtlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRlOiBNYXJrZXJTdGF0ZUVudW0gPSBNYXJrZXJTdGF0ZUVudW0uSURMRTtcclxuICAgIHB1YmxpYyByb3RhdGU/OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWFya2VyU2VydmljZTogTWFya2VyU2VydmljZSwgb3B0cz86IGdvb2dsZS5tYXBzLk1hcmtlck9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbWFya2VyU2VydmljZS5zZXRTZWxlY3RlZE1hcmtlcih0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=