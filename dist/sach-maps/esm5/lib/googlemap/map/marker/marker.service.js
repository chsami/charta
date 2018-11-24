/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MarkerModule } from './marker.module';
import { Marker } from './models/marker.model';
import { Injectable } from '@angular/core';
import { MarkerStateEnum } from './enum/marker.enum';
import * as i0 from "@angular/core";
import * as i1 from "./marker.module";
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
    /** @nocollapse */ MarkerService.ngInjectableDef = i0.defineInjectable({ factory: function MarkerService_Factory() { return new MarkerService(); }, token: MarkerService, providedIn: i1.MarkerModule });
    return MarkerService;
}());
export { MarkerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MarkerService.prototype.selectedMarker;
    /**
     * @type {?}
     * @private
     */
    MarkerService.prototype._markers;
    /**
     * @type {?}
     * @private
     */
    MarkerService.prototype._markerCluster;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcC8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGVtYXAvbWFwL21hcmtlci9tYXJrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRXJEO0lBaUJJO1FBWlEsYUFBUSxHQUFhLEVBQUUsQ0FBQztJQWNoQyxDQUFDO0lBVkQsc0JBQVcsa0NBQU87Ozs7UUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx3Q0FBYTs7OztRQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFNTSxxQ0FBYTs7OztJQUFwQixVQUFxQixHQUFvQjtRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBZSxDQUNyQyxHQUFHLEVBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTSw2Q0FBcUI7Ozs7SUFBNUIsVUFBNkIsR0FBb0I7UUFBakQsaUJBdUJDOztZQXRCUyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzVCLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsRUFBRSxHQUFHO1lBQ1IsU0FBUyxF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Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXJNb2R1bGUgfSBmcm9tICcuL21hcmtlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuL21vZGVscy9tYXJrZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtlclN0YXRlRW51bSB9IGZyb20gJy4vZW51bS9tYXJrZXIuZW51bSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBNYXJrZXJNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZE1hcmtlcjogTWFya2VyO1xyXG4gICAgcHJpdmF0ZSBfbWFya2VyczogTWFya2VyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9tYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyZXI7XHJcblxyXG4gICAgcHVibGljIGdldCBtYXJrZXJzKCk6IE1hcmtlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcmtlckNsdXN0ZXIoKTogTWFya2VyQ2x1c3RlcmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyQ2x1c3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNsdXN0ZXIobWFwOiBnb29nbGUubWFwcy5NYXApIHtcclxuICAgICAgICB0aGlzLl9tYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihcclxuICAgICAgICAgICAgbWFwLFxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlckNsdXN0ZXIuc2V0TWF4Wm9vbSgxNik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyTWFya2VyT25DbGljayhtYXA6IGdvb2dsZS5tYXBzLk1hcCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtMSwgLTEpLFxyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgICAgLy8gaWNvbjoge1xyXG4gICAgICAgICAgICAvLyAgIHVybDogXCJhc3NldHMvaW1nL3RhcmdldF9zYW1pX21lZGl1bS5wbmdcIixcclxuICAgICAgICAgICAgLy8gICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgLy8gICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTAsIDI1MClcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKFxyXG4gICAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRQb3NpdGlvbihldmVudC5sYXRMbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyLmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIG1hcC5wYW5Ubyh0aGlzLmdldExhc3QoKS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG1hcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R2VvY29kZUZyb21TZWxlY3RlZE1hcmtlcigpOiBnb29nbGUubWFwcy5MYXRMbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTWFya2VyLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRCeUluZGV4KGluZGV4OiBudW1iZXIpOiBNYXJrZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXJrZXJzW2luZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vyc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMYXN0KCk6IE1hcmtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnNbdGhpcy5fbWFya2Vycy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY291bnRNYXJrZXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZWxlY3RlZE1hcmtlcihtYXJrZXI6IE1hcmtlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSB0aGlzLl9tYXJrZXJzLmZpbmQoeCA9PiB4ID09PSBtYXJrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZ2V0TWFya2VySW5DcmVhdGlvblN0YXRlKCk6IE1hcmtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZmluZCh4ID0+IHguc3RhdGUgPT09IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hcmtlcihtYXJrZXI6IE1hcmtlcikge1xyXG4gICAgICAgIG1hcmtlci5zdGF0ZSA9IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTjtcclxuICAgICAgICB0aGlzLl9tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbWFya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3RhdGVNYXJrZXIoY2xvY2t3aXNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VySW5kZXggPSB0aGlzLl9tYXJrZXJzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgeCA9PiB4ID09PSB0aGlzLnNlbGVjdGVkTWFya2VyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50czogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICcjbWFya2VyTGF5ZXIgaW1nJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gZWxlbWVudHNbbWFya2VySW5kZXhdO1xyXG4gICAgICAgIGlmIChjbG9ja3dpc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICs9IDc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgICAgICdyb3RhdGUoJyArIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSArICdkZWcpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgLT0gNztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZSgnICsgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICsgJ2RlZyknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTWFya2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcjogTWFya2VyID0gdGhpcy5fbWFya2Vyc1t0aGlzLl9tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChtYXJrZXIuc3RhdGUgPT09IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTikge1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzID0gdGhpcy5fbWFya2Vycy5zbGljZSgwLCB0aGlzLmNvdW50TWFya2VycygpIC0gMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZU1hcmtlcihtYXJrZXI6IE1hcmtlcik6IHZvaWQge1xyXG4gICAgICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVNYXJrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyOiBNYXJrZXIgPSB0aGlzLmdldExhc3QoKTtcclxuICAgICAgICBtYXJrZXIuc3RhdGUgPSBNYXJrZXJTdGF0ZUVudW0uSURMRTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=