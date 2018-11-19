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
export class MapService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    get map() {
        return this._map;
    }
    /**
     * @return {?}
     */
    get key() {
        return this._key;
    }
    /**
     * Loadmap
     * @param {?} mapElement html map elemnt
     * @param {?} mapOptions
     * @param {?} compass
     * @param {?} key
     * @return {?}
     */
    init(mapElement, mapOptions, compass, key) {
        this._key = key;
        this._map = new google.maps.Map(mapElement.nativeElement, mapOptions);
        if (compass) {
            this.addCompass();
        }
        /** @type {?} */
        const overlay = new google.maps.OverlayView();
        overlay.draw = function () {
            this.getPanes().markerLayer.id = 'markerLayer';
        };
        overlay.setMap(this.map);
        return this.map;
    }
    // GEOCODING
    /**
     * @param {?} address
     * @return {?}
     */
    getGeocodeFromAddress(address) {
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${this.key}`);
    }
    /**
     * @param {?} location
     * @return {?}
     */
    getAddressFromGeocode(location) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                /** @type {?} */
                const geocoder = new google.maps.Geocoder();
                /** @type {?} */
                const latlng = location;
                /** @type {?} */
                let address;
                geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        address = results[0];
                        resolve(address.formatted_address);
                    }
                });
            });
        });
    }
    // Compass
    /**
     * @return {?}
     */
    addCompass() {
        /** @type {?} */
        const div = document.createElement('div');
        /** @type {?} */
        const icon = 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);
    }
}
MapService.decorators = [
    { type: Injectable, args: [{
                providedIn: MapModule
            },] }
];
MapService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ MapService.ngInjectableDef = i0.defineInjectable({ factory: function MapService_Factory() { return new MapService(i0.inject(i1.HttpClient)); }, token: MapService, providedIn: i2.MapModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcC8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGVtYXAvbWFwL21hcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU16QyxNQUFNOzs7O0lBS0YsWUFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3hCLENBQUM7Ozs7SUFFTCxJQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOzs7Ozs7Ozs7SUFNTSxJQUFJLENBQ1AsVUFBc0IsRUFDdEIsVUFBa0MsRUFDbEMsT0FBZ0IsRUFDaEIsR0FBVztRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBRWhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCOztjQUVLLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLEdBQUc7WUFDWCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7UUFDbkQsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUlNLHFCQUFxQixDQUFDLE9BQWU7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsNkRBQTZELE9BQU8sUUFDcEUsSUFBSSxDQUFDLEdBQ0wsRUFBRSxDQUNMLENBQUM7SUFDTixDQUFDOzs7OztJQUlZLHFCQUFxQixDQUM5QixRQUE0Qjs7WUFFNUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7c0JBQzdCLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFOztzQkFDckMsTUFBTSxHQUFHLFFBQVE7O29CQUNuQixPQUFtQztnQkFDdkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDdkQsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFO3dCQUMxQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7cUJBQ3RDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Ozs7O0lBSUQsVUFBVTs7Y0FDQSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7O2NBQ25DLElBQUksR0FDTixrRUFBa0U7UUFDdEUsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OztZQWxGSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLFNBQVM7YUFDeEI7OztZQU5RLFVBQVU7Ozs7Ozs7O0lBUWYsMEJBQThCOzs7OztJQUM5QiwwQkFBcUI7Ozs7O0lBSWpCLDBCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFwTW9kdWxlIH0gZnJvbSAnLi9tYXAubW9kdWxlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBNYXBNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcbiAgICBwcml2YXRlIF9rZXk6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFwKCk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkbWFwXHJcbiAgICAgKiBAcGFyYW0gbWFwRWxlbWVudCBodG1sIG1hcCBlbGVtbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoXHJcbiAgICAgICAgbWFwRWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBtYXBPcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zLFxyXG4gICAgICAgIGNvbXBhc3M6IGJvb2xlYW4sXHJcbiAgICAgICAga2V5OiBzdHJpbmdcclxuICAgICk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudC5uYXRpdmVFbGVtZW50LCBtYXBPcHRpb25zKTtcclxuICAgICAgICBpZiAoY29tcGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBhc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcclxuICAgICAgICBvdmVybGF5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFuZXMoKS5tYXJrZXJMYXllci5pZCA9ICdtYXJrZXJMYXllcic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvdmVybGF5LnNldE1hcCh0aGlzLm1hcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRU9DT0RJTkdcclxuXHJcbiAgICBwdWJsaWMgZ2V0R2VvY29kZUZyb21BZGRyZXNzKGFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHthZGRyZXNzfSZrZXk9JHtcclxuICAgICAgICAgICAgdGhpcy5rZXlcclxuICAgICAgICAgICAgfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldEFkZHJlc3NGcm9tR2VvY29kZShcclxuICAgICAgICBsb2NhdGlvbjogZ29vZ2xlLm1hcHMuTGF0TG5nXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGxuZyA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICBsZXQgYWRkcmVzczogZ29vZ2xlLm1hcHMuR2VvY29kZXJSZXN1bHQ7XHJcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBsb2NhdGlvbjogbGF0bG5nIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29tcGFzc1xyXG5cclxuICAgIGFkZENvbXBhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9XHJcbiAgICAgICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9rbWwvc2hhcGVzL3BhcmtpbmdfbG90X21hcHMucG5nJztcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiJyArIGljb24gKyAnXCI+ICcgKyBuYW1lO1xyXG4gICAgICAgIHRoaXMubWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5SSUdIVF9UT1BdLnB1c2goZGl2KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19