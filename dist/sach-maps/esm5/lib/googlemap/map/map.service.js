/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapModule } from './map.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./map.module";
var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
    }
    Object.defineProperty(MapService.prototype, "map", {
        get: /**
         * @return {?}
         */
        function () {
            return this._map;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapService.prototype, "key", {
        get: /**
         * @return {?}
         */
        function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loadmap
     * @param mapElement html map elemnt
     */
    /**
     * Loadmap
     * @param {?} mapElement html map elemnt
     * @param {?} mapOptions
     * @param {?} compass
     * @param {?} key
     * @return {?}
     */
    MapService.prototype.init = /**
     * Loadmap
     * @param {?} mapElement html map elemnt
     * @param {?} mapOptions
     * @param {?} compass
     * @param {?} key
     * @return {?}
     */
    function (mapElement, mapOptions, compass, key) {
        this._key = key;
        this._map = new google.maps.Map(mapElement.nativeElement, mapOptions);
        if (compass) {
            this.addCompass();
        }
        /** @type {?} */
        var overlay = new google.maps.OverlayView();
        overlay.draw = function () {
            this.getPanes().markerLayer.id = 'markerLayer';
        };
        overlay.setMap(this.map);
        return this.map;
    };
    // GEOCODING
    // GEOCODING
    /**
     * @param {?} address
     * @return {?}
     */
    MapService.prototype.getGeocodeFromAddress = 
    // GEOCODING
    /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + this.key);
    };
    /**
     * @param {?} location
     * @return {?}
     */
    MapService.prototype.getAddressFromGeocode = /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        /** @type {?} */
                        var geocoder = new google.maps.Geocoder();
                        /** @type {?} */
                        var latlng = location;
                        /** @type {?} */
                        var address;
                        geocoder.geocode({ location: latlng }, function (results, status) {
                            if (status === google.maps.GeocoderStatus.OK) {
                                address = results[0];
                                resolve(address.formatted_address);
                            }
                        });
                    })];
            });
        });
    };
    // Compass
    // Compass
    /**
     * @return {?}
     */
    MapService.prototype.addCompass = 
    // Compass
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var div = document.createElement('div');
        /** @type {?} */
        var icon = 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);
    };
    MapService.decorators = [
        { type: Injectable, args: [{
                    providedIn: MapModule
                },] }
    ];
    MapService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ MapService.ngInjectableDef = i0.defineInjectable({ factory: function MapService_Factory() { return new MapService(i0.inject(i1.HttpClient)); }, token: MapService, providedIn: i2.MapModule });
    return MapService;
}());
export { MapService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MapService.prototype._map;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype._key;
    /**
     * @type {?}
     * @private
     */
    MapService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcC8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGVtYXAvbWFwL21hcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUd6QztJQVFJLG9CQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDeEIsQ0FBQztJQUVMLHNCQUFXLDJCQUFHOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBRzs7OztRQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQ7OztPQUdHOzs7Ozs7Ozs7SUFDSSx5QkFBSTs7Ozs7Ozs7SUFBWCxVQUNJLFVBQXNCLEVBQ3RCLFVBQWtDLEVBQ2xDLE9BQWdCLEVBQ2hCLEdBQVc7UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RSxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjs7WUFFSyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUM3QyxPQUFPLENBQUMsSUFBSSxHQUFHO1lBQ1gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDO1FBQ25ELENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsWUFBWTs7Ozs7O0lBRUwsMENBQXFCOzs7Ozs7SUFBNUIsVUFBNkIsT0FBZTtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQiwrREFBNkQsT0FBTyxhQUNwRSxJQUFJLENBQUMsR0FDSCxDQUNMLENBQUM7SUFDTixDQUFDOzs7OztJQUlZLDBDQUFxQjs7OztJQUFsQyxVQUNJLFFBQTRCOzs7Z0JBRTVCLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07OzRCQUN6QixRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7NEJBQ3JDLE1BQU0sR0FBRyxRQUFROzs0QkFDbkIsT0FBbUM7d0JBQ3ZDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsVUFBQyxPQUFPLEVBQUUsTUFBTTs0QkFDbkQsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFO2dDQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7NkJBQ3RDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVELFVBQVU7Ozs7O0lBRVYsK0JBQVU7Ozs7O0lBQVY7O1lBQ1UsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDOztZQUNuQyxJQUFJLEdBQ04sa0VBQWtFO1FBQ3RFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkFsRkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxTQUFTO2lCQUN4Qjs7O2dCQU5RLFVBQVU7OztxQkFEbkI7Q0F5RkMsQUFwRkQsSUFvRkM7U0FqRlksVUFBVTs7Ozs7O0lBQ25CLDBCQUE4Qjs7Ozs7SUFDOUIsMEJBQXFCOzs7OztJQUlqQiwwQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1hcE1vZHVsZSB9IGZyb20gJy4vbWFwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2ludGVybmFsL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogTWFwTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX21hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG4gICAgcHJpdmF0ZSBfa2V5OiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcCgpOiBnb29nbGUubWFwcy5NYXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBrZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZG1hcFxyXG4gICAgICogQHBhcmFtIG1hcEVsZW1lbnQgaHRtbCBtYXAgZWxlbW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KFxyXG4gICAgICAgIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgbWFwT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9ucyxcclxuICAgICAgICBjb21wYXNzOiBib29sZWFuLFxyXG4gICAgICAgIGtleTogc3RyaW5nXHJcbiAgICApOiBnb29nbGUubWFwcy5NYXAge1xyXG4gICAgICAgIHRoaXMuX2tleSA9IGtleTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKGNvbXBhc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb21wYXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KCk7XHJcbiAgICAgICAgb3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBhbmVzKCkubWFya2VyTGF5ZXIuaWQgPSAnbWFya2VyTGF5ZXInO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VPQ09ESU5HXHJcblxyXG4gICAgcHVibGljIGdldEdlb2NvZGVGcm9tQWRkcmVzcyhhZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9hZGRyZXNzPSR7YWRkcmVzc30ma2V5PSR7XHJcbiAgICAgICAgICAgIHRoaXMua2V5XHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBZGRyZXNzRnJvbUdlb2NvZGUoXHJcbiAgICAgICAgbG9jYXRpb246IGdvb2dsZS5tYXBzLkxhdExuZ1xyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXRsbmcgPSBsb2NhdGlvbjtcclxuICAgICAgICAgICAgbGV0IGFkZHJlc3M6IGdvb2dsZS5tYXBzLkdlb2NvZGVyUmVzdWx0O1xyXG4gICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgbG9jYXRpb246IGxhdGxuZyB9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWRkcmVzcy5mb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbXBhc3NcclxuXHJcbiAgICBhZGRDb21wYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPVxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMva21sL3NoYXBlcy9wYXJraW5nX2xvdF9tYXBzLnBuZyc7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIicgKyBpY29uICsgJ1wiPiAnICsgbmFtZTtcclxuICAgICAgICB0aGlzLm1hcC5jb250cm9sc1tnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfVE9QXS5wdXNoKGRpdik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==