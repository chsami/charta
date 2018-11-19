/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
     * @param {?} address
     * @return {?}
     */
    MapService.prototype.getGeocodeFromAddress = /**
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
    /**
     * @return {?}
     */
    MapService.prototype.addCompass = /**
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
    /** @nocollapse */
    MapService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ MapService.ngInjectableDef = i0.defineInjectable({ factory: function MapService_Factory() { return new MapService(i0.inject(i1.HttpClient)); }, token: MapService, providedIn: i2.MapModule });
    return MapService;
}());
export { MapService };
if (false) {
    /** @type {?} */
    MapService.prototype._map;
    /** @type {?} */
    MapService.prototype._key;
    /** @type {?} */
    MapService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZ29vZ2xlbWFwL21hcC9tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0lBYXJDLG9CQUNZO1FBQUEsU0FBSSxHQUFKLElBQUk7S0FDWDswQkFFTSwyQkFBRzs7Ozs7WUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OzBCQUdWLDJCQUFHOzs7OztZQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztJQU9kLHlCQUFJOzs7Ozs7OztjQUNQLFVBQXNCLEVBQ3RCLFVBQWtDLEVBQ2xDLE9BQWdCLEVBQ2hCLEdBQVc7UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RSxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjs7UUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLElBQUksR0FBRztZQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztTQUNsRCxDQUFDO1FBQ0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7SUFLYiwwQ0FBcUI7Ozs7Y0FBQyxPQUFlO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLCtEQUE2RCxPQUFPLGFBQ3BFLElBQUksQ0FBQyxHQUNILENBQ0wsQ0FBQzs7Ozs7O0lBS08sMENBQXFCOzs7O2NBQzlCLFFBQTRCOzs7Z0JBRTVCLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07O3dCQUMvQixJQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O3dCQUM1QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7O3dCQUN4QixJQUFJLE9BQU8sQ0FBNkI7d0JBQ3hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsVUFBQyxPQUFPLEVBQUUsTUFBTTs0QkFDbkQsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFO2dDQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7NkJBQ3RDO3lCQUNKLENBQUMsQ0FBQztxQkFDTixDQUFDLEVBQUM7Ozs7SUFHUCxVQUFVOzs7O0lBRVYsK0JBQVU7OztJQUFWOztRQUNJLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQzFDLElBQU0sSUFBSSxHQUNOLGtFQUFrRSxDQUFDO1FBQ3ZFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0RTs7Z0JBbEZKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsU0FBUztpQkFDeEI7Ozs7Z0JBUlEsVUFBVTs7O3FCQURuQjs7U0FVYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNYXBNb2R1bGUgfSBmcm9tICcuL21hcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiZ29vZ2xlbWFwc1wiIC8+XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBNYXBNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcbiAgICBwcml2YXRlIF9rZXk6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFwKCk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkbWFwXHJcbiAgICAgKiBAcGFyYW0gbWFwRWxlbWVudCBodG1sIG1hcCBlbGVtbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoXHJcbiAgICAgICAgbWFwRWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBtYXBPcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zLFxyXG4gICAgICAgIGNvbXBhc3M6IGJvb2xlYW4sXHJcbiAgICAgICAga2V5OiBzdHJpbmdcclxuICAgICk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudC5uYXRpdmVFbGVtZW50LCBtYXBPcHRpb25zKTtcclxuICAgICAgICBpZiAoY29tcGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBhc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcclxuICAgICAgICBvdmVybGF5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFuZXMoKS5tYXJrZXJMYXllci5pZCA9ICdtYXJrZXJMYXllcic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvdmVybGF5LnNldE1hcCh0aGlzLm1hcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRU9DT0RJTkdcclxuXHJcbiAgICBwdWJsaWMgZ2V0R2VvY29kZUZyb21BZGRyZXNzKGFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHthZGRyZXNzfSZrZXk9JHtcclxuICAgICAgICAgICAgdGhpcy5rZXlcclxuICAgICAgICAgICAgfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldEFkZHJlc3NGcm9tR2VvY29kZShcclxuICAgICAgICBsb2NhdGlvbjogZ29vZ2xlLm1hcHMuTGF0TG5nXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGxuZyA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICBsZXQgYWRkcmVzczogZ29vZ2xlLm1hcHMuR2VvY29kZXJSZXN1bHQ7XHJcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBsb2NhdGlvbjogbGF0bG5nIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29tcGFzc1xyXG5cclxuICAgIGFkZENvbXBhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9XHJcbiAgICAgICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9rbWwvc2hhcGVzL3BhcmtpbmdfbG90X21hcHMucG5nJztcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiJyArIGljb24gKyAnXCI+ICcgKyBuYW1lO1xyXG4gICAgICAgIHRoaXMubWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5SSUdIVF9UT1BdLnB1c2goZGl2KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19