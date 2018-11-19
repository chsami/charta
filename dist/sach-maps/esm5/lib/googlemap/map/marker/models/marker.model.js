/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MarkerStateEnum } from '../enum/marker.enum';
var Marker = /** @class */ (function (_super) {
    tslib_1.__extends(Marker, _super);
    /**
     *
     */
    function Marker(markerService, opts) {
        var _this = _super.call(this, opts) || this;
        _this.state = MarkerStateEnum.IDLE;
        _this.rotate = 0;
        _this.addListener('click', function (event) {
            markerService.setSelectedMarker(_this);
        });
        return _this;
    }
    return Marker;
}(google.maps.Marker));
export { Marker };
if (false) {
    /** @type {?} */
    Marker.prototype.state;
    /** @type {?} */
    Marker.prototype.rotate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FjaC1tYXAvIiwic291cmNlcyI6WyJsaWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvbW9kZWxzL21hcmtlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RDtJQUE0QixrQ0FBa0I7SUFLMUM7O09BRUc7SUFDSCxnQkFBWSxhQUE0QixFQUFFLElBQWdDO1FBQTFFLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBSWQ7UUFYTSxXQUFLLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDOUMsWUFBTSxHQUFZLENBQUMsQ0FBQztRQU92QixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFBLEtBQUs7WUFDM0IsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQWRELENBQTRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQWM3Qzs7OztJQVpHLHVCQUFxRDs7SUFDckQsd0JBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE1hcmtlclN0YXRlRW51bSB9IGZyb20gJy4uL2VudW0vbWFya2VyLmVudW0nO1xyXG5pbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbWFya2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtlciBleHRlbmRzIGdvb2dsZS5tYXBzLk1hcmtlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRlOiBNYXJrZXJTdGF0ZUVudW0gPSBNYXJrZXJTdGF0ZUVudW0uSURMRTtcclxuICAgIHB1YmxpYyByb3RhdGU/OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWFya2VyU2VydmljZTogTWFya2VyU2VydmljZSwgb3B0cz86IGdvb2dsZS5tYXBzLk1hcmtlck9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbWFya2VyU2VydmljZS5zZXRTZWxlY3RlZE1hcmtlcih0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=