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
/** @nocollapse */
MapService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ MapService.ngInjectableDef = i0.defineInjectable({ factory: function MapService_Factory() { return new MapService(i0.inject(i1.HttpClient)); }, token: MapService, providedIn: i2.MapModule });
if (false) {
    /** @type {?} */
    MapService.prototype._map;
    /** @type {?} */
    MapService.prototype._key;
    /** @type {?} */
    MapService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZ29vZ2xlbWFwL21hcC9tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFRekMsTUFBTTs7OztJQUtGLFlBQ1k7UUFBQSxTQUFJLEdBQUosSUFBSTtLQUNYOzs7O1FBRU0sR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7UUFHVixHQUFHO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7O0lBT2QsSUFBSSxDQUNQLFVBQXNCLEVBQ3RCLFVBQWtDLEVBQ2xDLE9BQWdCLEVBQ2hCLEdBQVc7UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RSxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjs7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLElBQUksR0FBRztZQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztTQUNsRCxDQUFDO1FBQ0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7SUFLYixxQkFBcUIsQ0FBQyxPQUFlO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLDZEQUE2RCxPQUFPLFFBQ3BFLElBQUksQ0FBQyxHQUNMLEVBQUUsQ0FDTCxDQUFDOzs7Ozs7SUFLTyxxQkFBcUIsQ0FDOUIsUUFBNEI7O1lBRTVCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O2dCQUNuQyxNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O2dCQUM1QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7O2dCQUN4QixJQUFJLE9BQU8sQ0FBNkI7Z0JBQ3hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3ZELElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRTt3QkFDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUN0QztpQkFDSixDQUFDLENBQUM7YUFDTixDQUFDLENBQUM7Ozs7OztJQUtQLFVBQVU7O1FBQ04sTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFDMUMsTUFBTSxJQUFJLEdBQ04sa0VBQWtFLENBQUM7UUFDdkUsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3RFOzs7WUFsRkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxTQUFTO2FBQ3hCOzs7O1lBUlEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFwTW9kdWxlIH0gZnJvbSAnLi9tYXAubW9kdWxlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XHJcblxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImdvb2dsZW1hcHNcIiAvPlxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogTWFwTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX21hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG4gICAgcHJpdmF0ZSBfa2V5OiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcCgpOiBnb29nbGUubWFwcy5NYXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBrZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZG1hcFxyXG4gICAgICogQHBhcmFtIG1hcEVsZW1lbnQgaHRtbCBtYXAgZWxlbW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KFxyXG4gICAgICAgIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgbWFwT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9ucyxcclxuICAgICAgICBjb21wYXNzOiBib29sZWFuLFxyXG4gICAgICAgIGtleTogc3RyaW5nXHJcbiAgICApOiBnb29nbGUubWFwcy5NYXAge1xyXG4gICAgICAgIHRoaXMuX2tleSA9IGtleTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKGNvbXBhc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb21wYXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KCk7XHJcbiAgICAgICAgb3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBhbmVzKCkubWFya2VyTGF5ZXIuaWQgPSAnbWFya2VyTGF5ZXInO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VPQ09ESU5HXHJcblxyXG4gICAgcHVibGljIGdldEdlb2NvZGVGcm9tQWRkcmVzcyhhZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9hZGRyZXNzPSR7YWRkcmVzc30ma2V5PSR7XHJcbiAgICAgICAgICAgIHRoaXMua2V5XHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBZGRyZXNzRnJvbUdlb2NvZGUoXHJcbiAgICAgICAgbG9jYXRpb246IGdvb2dsZS5tYXBzLkxhdExuZ1xyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXRsbmcgPSBsb2NhdGlvbjtcclxuICAgICAgICAgICAgbGV0IGFkZHJlc3M6IGdvb2dsZS5tYXBzLkdlb2NvZGVyUmVzdWx0O1xyXG4gICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgbG9jYXRpb246IGxhdGxuZyB9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWRkcmVzcy5mb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbXBhc3NcclxuXHJcbiAgICBhZGRDb21wYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPVxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMva21sL3NoYXBlcy9wYXJraW5nX2xvdF9tYXBzLnBuZyc7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIicgKyBpY29uICsgJ1wiPiAnICsgbmFtZTtcclxuICAgICAgICB0aGlzLm1hcC5jb250cm9sc1tnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfVE9QXS5wdXNoKGRpdik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==