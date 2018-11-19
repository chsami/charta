(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('sach-map', ['exports', '@angular/core', '@angular/common', '@angular/common/http'], factory) :
    (factory((global['sach-map'] = {}),global.ng.core,global.ng.common,global.ng.common.http));
}(this, (function (exports,i0,common,i1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MapModule = /** @class */ (function () {
        function MapModule() {
        }
        MapModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
             */ function () {
                return this._map;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MapService.prototype, "key", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: MapModule
                    },] }
        ];
        MapService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ MapService.ngInjectableDef = i0.defineInjectable({ factory: function MapService_Factory() { return new MapService(i0.inject(i1.HttpClient)); }, token: MapService, providedIn: MapModule });
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
             */ function () {
                return this._markers;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarkerService.prototype, "markerCluster", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: MarkerModule
                    },] }
        ];
        MarkerService.ctorParameters = function () { return []; };
        /** @nocollapse */ MarkerService.ngInjectableDef = i0.defineInjectable({ factory: function MarkerService_Factory() { return new MarkerService(); }, token: MarkerService, providedIn: MarkerModule });
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

    exports.MapService = MapService;
    exports.MapModule = MapModule;
    exports.MarkerService = MarkerService;
    exports.MarkerModule = MarkerModule;
    exports.Marker = Marker;
    exports.MarkerStateEnum = MarkerStateEnum;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FjaC1tYXAudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vc2FjaC1tYXAvbGliL2dvb2dsZW1hcC9tYXAvbWFwLm1vZHVsZS50cyIsIm5nOi8vc2FjaC1tYXAvbGliL2dvb2dsZW1hcC9tYXAvbWFwLnNlcnZpY2UudHMiLCJuZzovL3NhY2gtbWFwL2xpYi9nb29nbGVtYXAvbWFwL21hcmtlci9tYXJrZXIubW9kdWxlLnRzIiwibmc6Ly9zYWNoLW1hcC9saWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvZW51bS9tYXJrZXIuZW51bS50cyIsIm5nOi8vc2FjaC1tYXAvbGliL2dvb2dsZW1hcC9tYXAvbWFya2VyL21vZGVscy9tYXJrZXIubW9kZWwudHMiLCJuZzovL3NhY2gtbWFwL2xpYi9nb29nbGVtYXAvbWFwL21hcmtlci9tYXJrZXIuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1hcE1vZHVsZSB9IGZyb20gJy4vbWFwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2ludGVybmFsL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogTWFwTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX21hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG4gICAgcHJpdmF0ZSBfa2V5OiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcCgpOiBnb29nbGUubWFwcy5NYXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBrZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZG1hcFxyXG4gICAgICogQHBhcmFtIG1hcEVsZW1lbnQgaHRtbCBtYXAgZWxlbW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KFxyXG4gICAgICAgIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgbWFwT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9ucyxcclxuICAgICAgICBjb21wYXNzOiBib29sZWFuLFxyXG4gICAgICAgIGtleTogc3RyaW5nXHJcbiAgICApOiBnb29nbGUubWFwcy5NYXAge1xyXG4gICAgICAgIHRoaXMuX2tleSA9IGtleTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQubmF0aXZlRWxlbWVudCwgbWFwT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKGNvbXBhc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb21wYXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KCk7XHJcbiAgICAgICAgb3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBhbmVzKCkubWFya2VyTGF5ZXIuaWQgPSAnbWFya2VyTGF5ZXInO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR0VPQ09ESU5HXHJcblxyXG4gICAgcHVibGljIGdldEdlb2NvZGVGcm9tQWRkcmVzcyhhZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9hZGRyZXNzPSR7YWRkcmVzc30ma2V5PSR7XHJcbiAgICAgICAgICAgIHRoaXMua2V5XHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBZGRyZXNzRnJvbUdlb2NvZGUoXHJcbiAgICAgICAgbG9jYXRpb246IGdvb2dsZS5tYXBzLkxhdExuZ1xyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXRsbmcgPSBsb2NhdGlvbjtcclxuICAgICAgICAgICAgbGV0IGFkZHJlc3M6IGdvb2dsZS5tYXBzLkdlb2NvZGVyUmVzdWx0O1xyXG4gICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgbG9jYXRpb246IGxhdGxuZyB9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWRkcmVzcy5mb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbXBhc3NcclxuXHJcbiAgICBhZGRDb21wYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPVxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMva21sL3NoYXBlcy9wYXJraW5nX2xvdF9tYXBzLnBuZyc7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIicgKyBpY29uICsgJ1wiPiAnICsgbmFtZTtcclxuICAgICAgICB0aGlzLm1hcC5jb250cm9sc1tnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfVE9QXS5wdXNoKGRpdik7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE1hcmtlclNlcnZpY2UgfSBmcm9tICcuL21hcmtlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL21hcC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFya2VyTW9kdWxlIHsgfVxyXG4iLCJleHBvcnQgZW51bSBNYXJrZXJTdGF0ZUVudW0ge1xyXG4gICAgQ1JFQVRJT04sXHJcbiAgICBFRElULFxyXG4gICAgSURMRVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBNYXJrZXJTdGF0ZUVudW0gfSBmcm9tICcuLi9lbnVtL21hcmtlci5lbnVtJztcclxuaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gJy4uL21hcmtlci5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBnb29nbGUubWFwcy5NYXJrZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0ZTogTWFya2VyU3RhdGVFbnVtID0gTWFya2VyU3RhdGVFbnVtLklETEU7XHJcbiAgICBwdWJsaWMgcm90YXRlPzogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1hcmtlclNlcnZpY2U6IE1hcmtlclNlcnZpY2UsIG9wdHM/OiBnb29nbGUubWFwcy5NYXJrZXJPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIG1hcmtlclNlcnZpY2Uuc2V0U2VsZWN0ZWRNYXJrZXIodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFya2VyTW9kdWxlIH0gZnJvbSAnLi9tYXJrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAnLi9tb2RlbHMvbWFya2VyLm1vZGVsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXJrZXJTdGF0ZUVudW0gfSBmcm9tICcuL2VudW0vbWFya2VyLmVudW0nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogTWFya2VyTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRNYXJrZXI6IE1hcmtlcjtcclxuICAgIHByaXZhdGUgX21hcmtlcnM6IE1hcmtlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfbWFya2VyQ2x1c3RlcjogTWFya2VyQ2x1c3RlcmVyO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFya2VycygpOiBNYXJrZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYXJrZXJDbHVzdGVyKCk6IE1hcmtlckNsdXN0ZXJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlckNsdXN0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDbHVzdGVyKG1hcDogZ29vZ2xlLm1hcHMuTWFwKSB7XHJcbiAgICAgICAgdGhpcy5fbWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyZXIoXHJcbiAgICAgICAgICAgIG1hcCxcclxuICAgICAgICAgICAgdGhpcy5tYXJrZXJzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyLnNldE1heFpvb20oMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3Rlck1hcmtlck9uQ2xpY2sobWFwOiBnb29nbGUubWFwcy5NYXApIHtcclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoLTEsIC0xKSxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIC8vIGljb246IHtcclxuICAgICAgICAgICAgLy8gICB1cmw6IFwiYXNzZXRzL2ltZy90YXJnZXRfc2FtaV9tZWRpdW0ucG5nXCIsXHJcbiAgICAgICAgICAgIC8vICAgb3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgIC8vICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoMjUwLCAyNTApXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihcclxuICAgICAgICAgICAgbWFwLFxyXG4gICAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXJrZXIuc2V0UG9zaXRpb24oZXZlbnQubGF0TG5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2VyQ2x1c3Rlci5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICBtYXAucGFuVG8odGhpcy5nZXRMYXN0KCkuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBtYXJrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEdlb2NvZGVGcm9tU2VsZWN0ZWRNYXJrZXIoKTogZ29vZ2xlLm1hcHMuTGF0TG5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE1hcmtlci5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kQnlJbmRleChpbmRleDogbnVtYmVyKTogTWFya2VyIHtcclxuICAgICAgICBpZiAodGhpcy5fbWFya2Vyc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnNbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGFzdCgpOiBNYXJrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzW3RoaXMuX21hcmtlcnMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvdW50TWFya2VycygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2VsZWN0ZWRNYXJrZXIobWFya2VyOiBNYXJrZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gdGhpcy5fbWFya2Vycy5maW5kKHggPT4geCA9PT0gbWFya2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdldE1hcmtlckluQ3JlYXRpb25TdGF0ZSgpOiBNYXJrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmZpbmQoeCA9PiB4LnN0YXRlID09PSBNYXJrZXJTdGF0ZUVudW0uQ1JFQVRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYXJrZXIobWFya2VyOiBNYXJrZXIpIHtcclxuICAgICAgICBtYXJrZXIuc3RhdGUgPSBNYXJrZXJTdGF0ZUVudW0uQ1JFQVRJT047XHJcbiAgICAgICAgdGhpcy5fbWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IG1hcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm90YXRlTWFya2VyKGNsb2Nrd2lzZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlckluZGV4ID0gdGhpcy5fbWFya2Vycy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIHggPT4geCA9PT0gdGhpcy5zZWxlY3RlZE1hcmtlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHM6IE5vZGVMaXN0T2Y8RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAnI21hcmtlckxheWVyIGltZydcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IGVsZW1lbnRzW21hcmtlckluZGV4XTtcclxuICAgICAgICBpZiAoY2xvY2t3aXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSArPSA3O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgICAgICAncm90YXRlKCcgKyB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgKyAnZGVnKSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlIC09IDc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgICAgICdyb3RhdGUoJyArIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSArICdkZWcpJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtYXJrZXI6IE1hcmtlciA9IHRoaXMuX21hcmtlcnNbdGhpcy5fbWFya2Vycy5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobWFya2VyLnN0YXRlID09PSBNYXJrZXJTdGF0ZUVudW0uQ1JFQVRJT04pIHtcclxuICAgICAgICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2VycyA9IHRoaXMuX21hcmtlcnMuc2xpY2UoMCwgdGhpcy5jb3VudE1hcmtlcnMoKSAtIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVNYXJrZXIobWFya2VyOiBNYXJrZXIpOiB2b2lkIHtcclxuICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlTWFya2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcjogTWFya2VyID0gdGhpcy5nZXRMYXN0KCk7XHJcbiAgICAgICAgbWFya2VyLnN0YXRlID0gTWFya2VyU3RhdGVFbnVtLklETEU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiSW5qZWN0YWJsZSIsIkh0dHBDbGllbnQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7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QUMsQ0FBQyxDQUFDO3dCQUNULEtBQUssQ0FBQyxDQUFDO3dCQUFDLEtBQUssQ0FBQzs0QkFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLE1BQU07d0JBQzlCLEtBQUssQ0FBQzs0QkFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO3dCQUN4RCxLQUFLLENBQUM7NEJBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsU0FBUzt3QkFDakQsS0FBSyxDQUFDOzRCQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsU0FBUzt3QkFDakQ7NEJBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQUMsU0FBUzs2QkFBRTs0QkFDNUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7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