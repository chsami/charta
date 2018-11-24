import { NgModule, Injectable, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __awaiter, __generator, __extends } from 'tslib';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return MapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
    /** @nocollapse */ MapService.ngInjectableDef = defineInjectable({ factory: function MapService_Factory() { return new MapService(inject(HttpClient)); }, token: MapService, providedIn: MapModule });
    return MapService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MarkerModule = /** @class */ (function () {
    function MarkerModule() {
    }
    MarkerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return MarkerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var MarkerStateEnum = {
    CREATION: 0,
    EDIT: 1,
    IDLE: 2,
};
MarkerStateEnum[MarkerStateEnum.CREATION] = 'CREATION';
MarkerStateEnum[MarkerStateEnum.EDIT] = 'EDIT';
MarkerStateEnum[MarkerStateEnum.IDLE] = 'IDLE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MarkerService = /** @class */ (function () {
    function MarkerService() {
        this._markers = [];
    }
    Object.defineProperty(MarkerService.prototype, "markers", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkerService.prototype, "markerCluster", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markerCluster;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} map
     * @return {?}
     */
    MarkerService.prototype.createCluster = /**
     * @param {?} map
     * @return {?}
     */
    function (map) {
        this._markerCluster = new MarkerClusterer(map, this.markers);
        this.markerCluster.setMaxZoom(16);
    };
    /**
     * @param {?} map
     * @return {?}
     */
    MarkerService.prototype.registerMarkerOnClick = /**
     * @param {?} map
     * @return {?}
     */
    function (map) {
        var _this = this;
        /** @type {?} */
        var marker = new Marker(this, {
            position: new google.maps.LatLng(-1, -1),
            map: map,
            draggable: true,
            clickable: true
            // icon: {
            //   url: "assets/img/target_sami_medium.png",
            //   origin: new google.maps.Point(0, 0),
            //   scaledSize: new google.maps.Size(250, 250)
            // }
        });
        google.maps.event.addListener(map, 'click', function (event) {
            marker.setPosition(event.latLng);
            _this.markerCluster.addMarker(marker);
            _this.addMarker(marker);
            map.panTo(_this.getLast().getPosition());
        });
        return marker;
    };
    /**
     * @return {?}
     */
    MarkerService.prototype.getGeocodeFromSelectedMarker = /**
     * @return {?}
     */
    function () {
        return this.selectedMarker.getPosition();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MarkerService.prototype.findByIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this._markers[index]) {
            return this._markers[index];
        }
        return null;
    };
    /**
     * @return {?}
     */
    MarkerService.prototype.getLast = /**
     * @return {?}
     */
    function () {
        return this._markers[this._markers.length - 1];
    };
    /**
     * @return {?}
     */
    MarkerService.prototype.countMarkers = /**
     * @return {?}
     */
    function () {
        return this._markers.length;
    };
    /**
     * @param {?} marker
     * @return {?}
     */
    MarkerService.prototype.setSelectedMarker = /**
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        this.selectedMarker = this._markers.find(function (x) { return x === marker; });
    };
    Object.defineProperty(MarkerService.prototype, "getMarkerInCreationState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markers.find(function (x) { return x.state === MarkerStateEnum.CREATION; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} marker
     * @return {?}
     */
    MarkerService.prototype.addMarker = /**
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        marker.state = MarkerStateEnum.CREATION;
        this._markers.push(marker);
        this.selectedMarker = marker;
    };
    /**
     * @param {?} clockwise
     * @return {?}
     */
    MarkerService.prototype.rotateMarker = /**
     * @param {?} clockwise
     * @return {?}
     */
    function (clockwise) {
        var _this = this;
        /** @type {?} */
        var markerIndex = this._markers.findIndex(function (x) { return x === _this.selectedMarker; });
        /** @type {?} */
        var elements = document.querySelectorAll('#markerLayer img');
        /** @type {?} */
        var element = elements[markerIndex];
        if (clockwise) {
            this._markers[markerIndex].rotate += 7;
            element.style.transform =
                'rotate(' + this._markers[markerIndex].rotate + 'deg)';
        }
        else {
            this._markers[markerIndex].rotate -= 7;
            element.style.transform =
                'rotate(' + this._markers[markerIndex].rotate + 'deg)';
        }
    };
    /**
     * @return {?}
     */
    MarkerService.prototype.deleteMarker = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var marker = this._markers[this._markers.length - 1];
        if (marker.state === MarkerStateEnum.CREATION) {
            marker.setMap(null);
            this._markers = this._markers.slice(0, this.countMarkers() - 1);
            this.selectedMarker = null;
        }
    };
    /**
     * @param {?} marker
     * @return {?}
     */
    MarkerService.prototype.hideMarker = /**
     * @param {?} marker
     * @return {?}
     */
    function (marker) {
        marker.setMap(null);
    };
    /**
     * @return {?}
     */
    MarkerService.prototype.saveMarker = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var marker = this.getLast();
        marker.state = MarkerStateEnum.IDLE;
        this.selectedMarker = null;
    };
    MarkerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: MarkerModule
                },] }
    ];
    MarkerService.ctorParameters = function () { return []; };
    /** @nocollapse */ MarkerService.ngInjectableDef = defineInjectable({ factory: function MarkerService_Factory() { return new MarkerService(); }, token: MarkerService, providedIn: MarkerModule });
    return MarkerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MapService, MapModule, MarkerService, MarkerModule, Marker, MarkerStateEnum };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FjaC1tYXAuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NhY2gtbWFwL2xpYi9nb29nbGVtYXAvbWFwL21hcC5tb2R1bGUudHMiLCJuZzovL3NhY2gtbWFwL2xpYi9nb29nbGVtYXAvbWFwL21hcC5zZXJ2aWNlLnRzIiwibmc6Ly9zYWNoLW1hcC9saWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvbWFya2VyLm1vZHVsZS50cyIsIm5nOi8vc2FjaC1tYXAvbGliL2dvb2dsZW1hcC9tYXAvbWFya2VyL2VudW0vbWFya2VyLmVudW0udHMiLCJuZzovL3NhY2gtbWFwL2xpYi9nb29nbGVtYXAvbWFwL21hcmtlci9tb2RlbHMvbWFya2VyLm1vZGVsLnRzIiwibmc6Ly9zYWNoLW1hcC9saWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvbWFya2VyLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFwTW9kdWxlIH0gZnJvbSAnLi9tYXAubW9kdWxlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBNYXBNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcbiAgICBwcml2YXRlIF9rZXk6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFwKCk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkbWFwXHJcbiAgICAgKiBAcGFyYW0gbWFwRWxlbWVudCBodG1sIG1hcCBlbGVtbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoXHJcbiAgICAgICAgbWFwRWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBtYXBPcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zLFxyXG4gICAgICAgIGNvbXBhc3M6IGJvb2xlYW4sXHJcbiAgICAgICAga2V5OiBzdHJpbmdcclxuICAgICk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudC5uYXRpdmVFbGVtZW50LCBtYXBPcHRpb25zKTtcclxuICAgICAgICBpZiAoY29tcGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBhc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcclxuICAgICAgICBvdmVybGF5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFuZXMoKS5tYXJrZXJMYXllci5pZCA9ICdtYXJrZXJMYXllcic7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvdmVybGF5LnNldE1hcCh0aGlzLm1hcCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHRU9DT0RJTkdcclxuXHJcbiAgICBwdWJsaWMgZ2V0R2VvY29kZUZyb21BZGRyZXNzKGFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHthZGRyZXNzfSZrZXk9JHtcclxuICAgICAgICAgICAgdGhpcy5rZXlcclxuICAgICAgICAgICAgfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldEFkZHJlc3NGcm9tR2VvY29kZShcclxuICAgICAgICBsb2NhdGlvbjogZ29vZ2xlLm1hcHMuTGF0TG5nXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGxuZyA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICBsZXQgYWRkcmVzczogZ29vZ2xlLm1hcHMuR2VvY29kZXJSZXN1bHQ7XHJcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBsb2NhdGlvbjogbGF0bG5nIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29tcGFzc1xyXG5cclxuICAgIGFkZENvbXBhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9XHJcbiAgICAgICAgICAgICdodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9rbWwvc2hhcGVzL3BhcmtpbmdfbG90X21hcHMucG5nJztcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiJyArIGljb24gKyAnXCI+ICcgKyBuYW1lO1xyXG4gICAgICAgIHRoaXMubWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5SSUdIVF9UT1BdLnB1c2goZGl2KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gJy4vbWFya2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vbWFwLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXJNb2R1bGUgeyB9XHJcbiIsImV4cG9ydCBlbnVtIE1hcmtlclN0YXRlRW51bSB7XHJcbiAgICBDUkVBVElPTixcclxuICAgIEVESVQsXHJcbiAgICBJRExFXHJcbn1cclxuIiwiXHJcbmltcG9ydCB7IE1hcmtlclN0YXRlRW51bSB9IGZyb20gJy4uL2VudW0vbWFya2VyLmVudW0nO1xyXG5pbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbWFya2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtlciBleHRlbmRzIGdvb2dsZS5tYXBzLk1hcmtlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRlOiBNYXJrZXJTdGF0ZUVudW0gPSBNYXJrZXJTdGF0ZUVudW0uSURMRTtcclxuICAgIHB1YmxpYyByb3RhdGU/OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWFya2VyU2VydmljZTogTWFya2VyU2VydmljZSwgb3B0cz86IGdvb2dsZS5tYXBzLk1hcmtlck9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbWFya2VyU2VydmljZS5zZXRTZWxlY3RlZE1hcmtlcih0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNYXJrZXJNb2R1bGUgfSBmcm9tICcuL21hcmtlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuL21vZGVscy9tYXJrZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtlclN0YXRlRW51bSB9IGZyb20gJy4vZW51bS9tYXJrZXIuZW51bSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBNYXJrZXJNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZE1hcmtlcjogTWFya2VyO1xyXG4gICAgcHJpdmF0ZSBfbWFya2VyczogTWFya2VyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9tYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyZXI7XHJcblxyXG4gICAgcHVibGljIGdldCBtYXJrZXJzKCk6IE1hcmtlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcmtlckNsdXN0ZXIoKTogTWFya2VyQ2x1c3RlcmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyQ2x1c3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNsdXN0ZXIobWFwOiBnb29nbGUubWFwcy5NYXApIHtcclxuICAgICAgICB0aGlzLl9tYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihcclxuICAgICAgICAgICAgbWFwLFxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlckNsdXN0ZXIuc2V0TWF4Wm9vbSgxNik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyTWFya2VyT25DbGljayhtYXA6IGdvb2dsZS5tYXBzLk1hcCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtMSwgLTEpLFxyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgICAgLy8gaWNvbjoge1xyXG4gICAgICAgICAgICAvLyAgIHVybDogXCJhc3NldHMvaW1nL3RhcmdldF9zYW1pX21lZGl1bS5wbmdcIixcclxuICAgICAgICAgICAgLy8gICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgLy8gICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTAsIDI1MClcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKFxyXG4gICAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRQb3NpdGlvbihldmVudC5sYXRMbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyLmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIG1hcC5wYW5Ubyh0aGlzLmdldExhc3QoKS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG1hcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R2VvY29kZUZyb21TZWxlY3RlZE1hcmtlcigpOiBnb29nbGUubWFwcy5MYXRMbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTWFya2VyLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRCeUluZGV4KGluZGV4OiBudW1iZXIpOiBNYXJrZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXJrZXJzW2luZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vyc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMYXN0KCk6IE1hcmtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnNbdGhpcy5fbWFya2Vycy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY291bnRNYXJrZXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZWxlY3RlZE1hcmtlcihtYXJrZXI6IE1hcmtlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSB0aGlzLl9tYXJrZXJzLmZpbmQoeCA9PiB4ID09PSBtYXJrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZ2V0TWFya2VySW5DcmVhdGlvblN0YXRlKCk6IE1hcmtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZmluZCh4ID0+IHguc3RhdGUgPT09IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hcmtlcihtYXJrZXI6IE1hcmtlcikge1xyXG4gICAgICAgIG1hcmtlci5zdGF0ZSA9IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTjtcclxuICAgICAgICB0aGlzLl9tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbWFya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3RhdGVNYXJrZXIoY2xvY2t3aXNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VySW5kZXggPSB0aGlzLl9tYXJrZXJzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgeCA9PiB4ID09PSB0aGlzLnNlbGVjdGVkTWFya2VyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50czogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICcjbWFya2VyTGF5ZXIgaW1nJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gZWxlbWVudHNbbWFya2VySW5kZXhdO1xyXG4gICAgICAgIGlmIChjbG9ja3dpc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICs9IDc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgICAgICdyb3RhdGUoJyArIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSArICdkZWcpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgLT0gNztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZSgnICsgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICsgJ2RlZyknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTWFya2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcjogTWFya2VyID0gdGhpcy5fbWFya2Vyc1t0aGlzLl9tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChtYXJrZXIuc3RhdGUgPT09IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTikge1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzID0gdGhpcy5fbWFya2Vycy5zbGljZSgwLCB0aGlzLmNvdW50TWFya2VycygpIC0gMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZU1hcmtlcihtYXJrZXI6IE1hcmtlcik6IHZvaWQge1xyXG4gICAgICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVNYXJrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyOiBNYXJrZXIgPSB0aGlzLmdldExhc3QoKTtcclxuICAgICAgICBtYXJrZXIuc3RhdGUgPSBNYXJrZXJTdGF0ZUVudW0uSURMRTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBR0E7S0FLMEI7O2dCQUx6QixRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7cUJBQ2Y7aUJBQ0o7O0lBQ3dCLGdCQUFDO0NBTDFCOzs7Ozs7O0lDVUksb0JBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtLQUN2QjtJQUVMLHNCQUFXLDJCQUFHOzs7O1FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7OztPQUFBO0lBRUQsc0JBQVcsMkJBQUc7Ozs7UUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjs7O09BQUE7Ozs7Ozs7Ozs7Ozs7SUFNTSx5QkFBSTs7Ozs7Ozs7SUFBWCxVQUNJLFVBQXNCLEVBQ3RCLFVBQWtDLEVBQ2xDLE9BQWdCLEVBQ2hCLEdBQVc7UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RSxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjs7WUFFSyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFB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