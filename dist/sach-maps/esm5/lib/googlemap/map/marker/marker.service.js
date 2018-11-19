/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /** @nocollapse */ MarkerService.ngInjectableDef = i0.defineInjectable({ factory: function MarkerService_Factory() { return new MarkerService(); }, token: MarkerService, providedIn: i1.MarkerModule });
    return MarkerService;
}());
export { MarkerService };
if (false) {
    /** @type {?} */
    MarkerService.prototype.selectedMarker;
    /** @type {?} */
    MarkerService.prototype._markers;
    /** @type {?} */
    MarkerService.prototype._markerCluster;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvbWFya2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7SUFxQmpEO3dCQVo2QixFQUFFO0tBYzlCOzBCQVZVLGtDQUFPOzs7OztZQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7MEJBR2Qsd0NBQWE7Ozs7O1lBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Ozs7Ozs7O0lBT3hCLHFDQUFhOzs7O2NBQUMsR0FBb0I7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FDckMsR0FBRyxFQUNILElBQUksQ0FBQyxPQUFPLENBQ2YsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7SUFHL0IsNkNBQXFCOzs7O2NBQUMsR0FBb0I7OztRQUM3QyxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDNUIsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsR0FBRyxFQUFFLEdBQUc7WUFDUixTQUFTLEVBQUUsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJO1NBTWxCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDekIsR0FBRyxF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QUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsUUFBUSxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzlCOzs7Ozs7SUFHRSxrQ0FBVTs7OztjQUFDLE1BQWM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHakIsa0NBQVU7Ozs7O1FBQ2IsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzs7O2dCQTNIbEMsVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxZQUFZO2lCQUMzQjs7Ozs7d0JBVEQ7O1NBVWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtlck1vZHVsZSB9IGZyb20gJy4vbWFya2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4vbW9kZWxzL21hcmtlci5tb2RlbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFya2VyU3RhdGVFbnVtIH0gZnJvbSAnLi9lbnVtL21hcmtlci5lbnVtJztcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiZ29vZ2xlbWFwc1wiIC8+XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBNYXJrZXJNb2R1bGVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZE1hcmtlcjogTWFya2VyO1xyXG4gICAgcHJpdmF0ZSBfbWFya2VyczogTWFya2VyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9tYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyZXI7XHJcblxyXG4gICAgcHVibGljIGdldCBtYXJrZXJzKCk6IE1hcmtlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcmtlckNsdXN0ZXIoKTogTWFya2VyQ2x1c3RlcmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyQ2x1c3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNsdXN0ZXIobWFwOiBnb29nbGUubWFwcy5NYXApIHtcclxuICAgICAgICB0aGlzLl9tYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihcclxuICAgICAgICAgICAgbWFwLFxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlckNsdXN0ZXIuc2V0TWF4Wm9vbSgxNik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyTWFya2VyT25DbGljayhtYXA6IGdvb2dsZS5tYXBzLk1hcCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtMSwgLTEpLFxyXG4gICAgICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgICAgICAgLy8gaWNvbjoge1xyXG4gICAgICAgICAgICAvLyAgIHVybDogXCJhc3NldHMvaW1nL3RhcmdldF9zYW1pX21lZGl1bS5wbmdcIixcclxuICAgICAgICAgICAgLy8gICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgICAgICAgLy8gICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTAsIDI1MClcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKFxyXG4gICAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRQb3NpdGlvbihldmVudC5sYXRMbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyLmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIG1hcC5wYW5Ubyh0aGlzLmdldExhc3QoKS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG1hcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R2VvY29kZUZyb21TZWxlY3RlZE1hcmtlcigpOiBnb29nbGUubWFwcy5MYXRMbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTWFya2VyLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRCeUluZGV4KGluZGV4OiBudW1iZXIpOiBNYXJrZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXJrZXJzW2luZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vyc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMYXN0KCk6IE1hcmtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnNbdGhpcy5fbWFya2Vycy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY291bnRNYXJrZXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZWxlY3RlZE1hcmtlcihtYXJrZXI6IE1hcmtlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSB0aGlzLl9tYXJrZXJzLmZpbmQoeCA9PiB4ID09PSBtYXJrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZ2V0TWFya2VySW5DcmVhdGlvblN0YXRlKCk6IE1hcmtlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZmluZCh4ID0+IHguc3RhdGUgPT09IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hcmtlcihtYXJrZXI6IE1hcmtlcikge1xyXG4gICAgICAgIG1hcmtlci5zdGF0ZSA9IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTjtcclxuICAgICAgICB0aGlzLl9tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbWFya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3RhdGVNYXJrZXIoY2xvY2t3aXNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VySW5kZXggPSB0aGlzLl9tYXJrZXJzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgeCA9PiB4ID09PSB0aGlzLnNlbGVjdGVkTWFya2VyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50czogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICAgICcjbWFya2VyTGF5ZXIgaW1nJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gZWxlbWVudHNbbWFya2VySW5kZXhdO1xyXG4gICAgICAgIGlmIChjbG9ja3dpc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICs9IDc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgICAgICdyb3RhdGUoJyArIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSArICdkZWcpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgLT0gNztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZSgnICsgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICsgJ2RlZyknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTWFya2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcjogTWFya2VyID0gdGhpcy5fbWFya2Vyc1t0aGlzLl9tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChtYXJrZXIuc3RhdGUgPT09IE1hcmtlclN0YXRlRW51bS5DUkVBVElPTikge1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzID0gdGhpcy5fbWFya2Vycy5zbGljZSgwLCB0aGlzLmNvdW50TWFya2VycygpIC0gMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZU1hcmtlcihtYXJrZXI6IE1hcmtlcik6IHZvaWQge1xyXG4gICAgICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVNYXJrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyOiBNYXJrZXIgPSB0aGlzLmdldExhc3QoKTtcclxuICAgICAgICBtYXJrZXIuc3RhdGUgPSBNYXJrZXJTdGF0ZUVudW0uSURMRTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=