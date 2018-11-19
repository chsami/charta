/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FjaC1tYXBzLyIsInNvdXJjZXMiOlsibGliL2dvb2dsZW1hcC9tYXAvbWFya2VyL21vZGVscy9tYXJrZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNdEQsSUFBQTtJQUE0QixrQ0FBa0I7SUFLMUM7O09BRUc7SUFDSCxnQkFBWSxhQUE0QixFQUFFLElBQWdDO1FBQTFFLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBSWQ7c0JBWCtCLGVBQWUsQ0FBQyxJQUFJO3VCQUMzQixDQUFDO1FBT3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQUEsS0FBSztZQUMzQixhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDOztLQUNOO2lCQXBCTDtFQU80QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFjN0MsQ0FBQTtBQWRELGtCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE1hcmtlclN0YXRlRW51bSB9IGZyb20gJy4uL2VudW0vbWFya2VyLmVudW0nO1xyXG5pbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbWFya2VyLnNlcnZpY2UnO1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJnb29nbGVtYXBzXCIgLz5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWFya2VyIGV4dGVuZHMgZ29vZ2xlLm1hcHMuTWFya2VyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGU6IE1hcmtlclN0YXRlRW51bSA9IE1hcmtlclN0YXRlRW51bS5JRExFO1xyXG4gICAgcHVibGljIHJvdGF0ZT86IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtYXJrZXJTZXJ2aWNlOiBNYXJrZXJTZXJ2aWNlLCBvcHRzPzogZ29vZ2xlLm1hcHMuTWFya2VyT3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBtYXJrZXJTZXJ2aWNlLnNldFNlbGVjdGVkTWFya2VyKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==