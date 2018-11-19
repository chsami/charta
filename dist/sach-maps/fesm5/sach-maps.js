import { NgModule, Injectable, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __awaiter, __generator, __extends } from 'tslib';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /** @nocollapse */ MapService.ngInjectableDef = defineInjectable({ factory: function MapService_Factory() { return new MapService(inject(HttpClient)); }, token: MapService, providedIn: MapModule });
    return MapService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /** @nocollapse */
    MarkerService.ctorParameters = function () { return []; };
    /** @nocollapse */ MarkerService.ngInjectableDef = defineInjectable({ factory: function MarkerService_Factory() { return new MarkerService(); }, token: MarkerService, providedIn: MarkerModule });
    return MarkerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MapService, MapModule, MarkerService, MarkerModule, Marker, MarkerStateEnum };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FjaC1tYXBzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zYWNoLW1hcHMvbGliL2dvb2dsZW1hcC9tYXAvbWFwLm1vZHVsZS50cyIsIm5nOi8vc2FjaC1tYXBzL2xpYi9nb29nbGVtYXAvbWFwL21hcC5zZXJ2aWNlLnRzIiwibmc6Ly9zYWNoLW1hcHMvbGliL2dvb2dsZW1hcC9tYXAvbWFya2VyL21hcmtlci5tb2R1bGUudHMiLCJuZzovL3NhY2gtbWFwcy9saWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvZW51bS9tYXJrZXIuZW51bS50cyIsIm5nOi8vc2FjaC1tYXBzL2xpYi9nb29nbGVtYXAvbWFwL21hcmtlci9tb2RlbHMvbWFya2VyLm1vZGVsLnRzIiwibmc6Ly9zYWNoLW1hcHMvbGliL2dvb2dsZW1hcC9tYXAvbWFya2VyL21hcmtlci5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1hcE1vZHVsZSB9IGZyb20gJy4vbWFwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2ludGVybmFsL09ic2VydmFibGUnO1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJnb29nbGVtYXBzXCIgLz5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46IE1hcE1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9tYXA6IGdvb2dsZS5tYXBzLk1hcDtcclxuICAgIHByaXZhdGUgX2tleTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYXAoKTogZ29vZ2xlLm1hcHMuTWFwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQga2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRtYXBcclxuICAgICAqIEBwYXJhbSBtYXBFbGVtZW50IGh0bWwgbWFwIGVsZW1udFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdChcclxuICAgICAgICBtYXBFbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIG1hcE9wdGlvbnM6IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnMsXHJcbiAgICAgICAgY29tcGFzczogYm9vbGVhbixcclxuICAgICAgICBrZXk6IHN0cmluZ1xyXG4gICAgKTogZ29vZ2xlLm1hcHMuTWFwIHtcclxuICAgICAgICB0aGlzLl9rZXkgPSBrZXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1hcE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChjb21wYXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcGFzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xyXG4gICAgICAgIG92ZXJsYXkuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYW5lcygpLm1hcmtlckxheWVyLmlkID0gJ21hcmtlckxheWVyJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIG92ZXJsYXkuc2V0TWFwKHRoaXMubWFwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdFT0NPRElOR1xyXG5cclxuICAgIHB1YmxpYyBnZXRHZW9jb2RlRnJvbUFkZHJlc3MoYWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0ke2FkZHJlc3N9JmtleT0ke1xyXG4gICAgICAgICAgICB0aGlzLmtleVxyXG4gICAgICAgICAgICB9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWRkcmVzc0Zyb21HZW9jb2RlKFxyXG4gICAgICAgIGxvY2F0aW9uOiBnb29nbGUubWFwcy5MYXRMbmdcclxuICAgICk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgbGF0bG5nID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgIGxldCBhZGRyZXNzOiBnb29nbGUubWFwcy5HZW9jb2RlclJlc3VsdDtcclxuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7IGxvY2F0aW9uOiBsYXRsbmcgfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0gcmVzdWx0c1swXTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFkZHJlc3MuZm9ybWF0dGVkX2FkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb21wYXNzXHJcblxyXG4gICAgYWRkQ29tcGFzcygpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpY29uID1cclxuICAgICAgICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL2ttbC9zaGFwZXMvcGFya2luZ19sb3RfbWFwcy5wbmcnO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCInICsgaWNvbiArICdcIj4gJyArIG5hbWU7XHJcbiAgICAgICAgdGhpcy5tYXAuY29udHJvbHNbZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX1RPUF0ucHVzaChkaXYpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBNYXJrZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtlck1vZHVsZSB7IH1cclxuIiwiZXhwb3J0IGVudW0gTWFya2VyU3RhdGVFbnVtIHtcclxuICAgIENSRUFUSU9OLFxyXG4gICAgRURJVCxcclxuICAgIElETEVcclxufVxyXG4iLCJcclxuaW1wb3J0IHsgTWFya2VyU3RhdGVFbnVtIH0gZnJvbSAnLi4vZW51bS9tYXJrZXIuZW51bSc7XHJcbmltcG9ydCB7IE1hcmtlclNlcnZpY2UgfSBmcm9tICcuLi9tYXJrZXIuc2VydmljZSc7XHJcblxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImdvb2dsZW1hcHNcIiAvPlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBnb29nbGUubWFwcy5NYXJrZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogTWFya2VyU3RhdGVFbnVtID0gTWFya2VyU3RhdGVFbnVtLklETEU7XHJcbiAgICBwdWJsaWMgcm90YXRlPzogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1hcmtlclNlcnZpY2U6IE1hcmtlclNlcnZpY2UsIG9wdHM/OiBnb29nbGUubWFwcy5NYXJrZXJPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIG1hcmtlclNlcnZpY2Uuc2V0U2VsZWN0ZWRNYXJrZXIodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFya2VyTW9kdWxlIH0gZnJvbSAnLi9tYXJrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAnLi9tb2RlbHMvbWFya2VyLm1vZGVsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXJrZXJTdGF0ZUVudW0gfSBmcm9tICcuL2VudW0vbWFya2VyLmVudW0nO1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJnb29nbGVtYXBzXCIgLz5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46IE1hcmtlck1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFya2VyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkTWFya2VyOiBNYXJrZXI7XHJcbiAgICBwcml2YXRlIF9tYXJrZXJzOiBNYXJrZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX21hcmtlckNsdXN0ZXI6IE1hcmtlckNsdXN0ZXJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcmtlcnMoKTogTWFya2VyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFya2VyQ2x1c3RlcigpOiBNYXJrZXJDbHVzdGVyZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJDbHVzdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQ2x1c3RlcihtYXA6IGdvb2dsZS5tYXBzLk1hcCkge1xyXG4gICAgICAgIHRoaXMuX21hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyKFxyXG4gICAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICAgIHRoaXMubWFya2Vyc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyQ2x1c3Rlci5zZXRNYXhab29tKDE2KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJNYXJrZXJPbkNsaWNrKG1hcDogZ29vZ2xlLm1hcHMuTWFwKSB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcih0aGlzLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC0xLCAtMSksXHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAvLyBpY29uOiB7XHJcbiAgICAgICAgICAgIC8vICAgdXJsOiBcImFzc2V0cy9pbWcvdGFyZ2V0X3NhbWlfbWVkaXVtLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICAvLyAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDI1MCwgMjUwKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoXHJcbiAgICAgICAgICAgIG1hcCxcclxuICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFBvc2l0aW9uKGV2ZW50LmxhdExuZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlckNsdXN0ZXIuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgbWFwLnBhblRvKHRoaXMuZ2V0TGFzdCgpLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbWFya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHZW9jb2RlRnJvbVNlbGVjdGVkTWFya2VyKCk6IGdvb2dsZS5tYXBzLkxhdExuZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNYXJrZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IE1hcmtlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21hcmtlcnNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExhc3QoKTogTWFya2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vyc1t0aGlzLl9tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3VudE1hcmtlcnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNlbGVjdGVkTWFya2VyKG1hcmtlcjogTWFya2VyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IHRoaXMuX21hcmtlcnMuZmluZCh4ID0+IHggPT09IG1hcmtlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnZXRNYXJrZXJJbkNyZWF0aW9uU3RhdGUoKTogTWFya2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5maW5kKHggPT4geC5zdGF0ZSA9PT0gTWFya2VyU3RhdGVFbnVtLkNSRUFUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWFya2VyKG1hcmtlcjogTWFya2VyKSB7XHJcbiAgICAgICAgbWFya2VyLnN0YXRlID0gTWFya2VyU3RhdGVFbnVtLkNSRUFUSU9OO1xyXG4gICAgICAgIHRoaXMuX21hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSBtYXJrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZU1hcmtlcihjbG9ja3dpc2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtYXJrZXJJbmRleCA9IHRoaXMuX21hcmtlcnMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICB4ID0+IHggPT09IHRoaXMuc2VsZWN0ZWRNYXJrZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgJyNtYXJrZXJMYXllciBpbWcnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSBlbGVtZW50c1ttYXJrZXJJbmRleF07XHJcbiAgICAgICAgaWYgKGNsb2Nrd2lzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgKz0gNztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZSgnICsgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICsgJ2RlZyknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSAtPSA3O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgICAgICAncm90YXRlKCcgKyB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgKyAnZGVnKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVNYXJrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyOiBNYXJrZXIgPSB0aGlzLl9tYXJrZXJzW3RoaXMuX21hcmtlcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG1hcmtlci5zdGF0ZSA9PT0gTWFya2VyU3RhdGVFbnVtLkNSRUFUSU9OKSB7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlcnMgPSB0aGlzLl9tYXJrZXJzLnNsaWNlKDAsIHRoaXMuY291bnRNYXJrZXJzKCkgLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlTWFya2VyKG1hcmtlcjogTWFya2VyKTogdm9pZCB7XHJcbiAgICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtYXJrZXI6IE1hcmtlciA9IHRoaXMuZ2V0TGFzdCgpO1xyXG4gICAgICAgIG1hcmtlci5zdGF0ZSA9IE1hcmtlclN0YXRlRW51bS5JRExFO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO2lCQUNKOztvQkFQRDs7Ozs7Ozs7SUNlSSxvQkFDWTtRQUFBLFNBQUksR0FBSixJQUFJO0tBQ1g7MEJBRU0sMkJBQUc7Ozs7O1lBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7OzswQkFHViwyQkFBRzs7Ozs7WUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFPZCx5QkFBSTs7Ozs7Ozs7Y0FDUCxVQUFzQixFQUN0QixVQUFrQyxFQUNsQyxPQUFnQixFQUNoQixHQUFXO1FBRVgsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEUsSUFBSSxPQUFPLEVBQUU7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