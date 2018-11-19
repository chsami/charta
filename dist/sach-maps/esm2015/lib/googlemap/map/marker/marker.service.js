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
export class MarkerService {
    constructor() {
        this._markers = [];
    }
    /**
     * @return {?}
     */
    get markers() {
        return this._markers;
    }
    /**
     * @return {?}
     */
    get markerCluster() {
        return this._markerCluster;
    }
    /**
     * @param {?} map
     * @return {?}
     */
    createCluster(map) {
        this._markerCluster = new MarkerClusterer(map, this.markers);
        this.markerCluster.setMaxZoom(16);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    registerMarkerOnClick(map) {
        /** @type {?} */
        const marker = new Marker(this, {
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
        google.maps.event.addListener(map, 'click', event => {
            marker.setPosition(event.latLng);
            this.markerCluster.addMarker(marker);
            this.addMarker(marker);
            map.panTo(this.getLast().getPosition());
        });
        return marker;
    }
    /**
     * @return {?}
     */
    getGeocodeFromSelectedMarker() {
        return this.selectedMarker.getPosition();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    findByIndex(index) {
        if (this._markers[index]) {
            return this._markers[index];
        }
        return null;
    }
    /**
     * @return {?}
     */
    getLast() {
        return this._markers[this._markers.length - 1];
    }
    /**
     * @return {?}
     */
    countMarkers() {
        return this._markers.length;
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    setSelectedMarker(marker) {
        this.selectedMarker = this._markers.find(x => x === marker);
    }
    /**
     * @return {?}
     */
    get getMarkerInCreationState() {
        return this._markers.find(x => x.state === MarkerStateEnum.CREATION);
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    addMarker(marker) {
        marker.state = MarkerStateEnum.CREATION;
        this._markers.push(marker);
        this.selectedMarker = marker;
    }
    /**
     * @param {?} clockwise
     * @return {?}
     */
    rotateMarker(clockwise) {
        /** @type {?} */
        const markerIndex = this._markers.findIndex(x => x === this.selectedMarker);
        /** @type {?} */
        const elements = document.querySelectorAll('#markerLayer img');
        /** @type {?} */
        const element = elements[markerIndex];
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
    }
    /**
     * @return {?}
     */
    deleteMarker() {
        /** @type {?} */
        const marker = this._markers[this._markers.length - 1];
        if (marker.state === MarkerStateEnum.CREATION) {
            marker.setMap(null);
            this._markers = this._markers.slice(0, this.countMarkers() - 1);
            this.selectedMarker = null;
        }
    }
    /**
     * @param {?} marker
     * @return {?}
     */
    hideMarker(marker) {
        marker.setMap(null);
    }
    /**
     * @return {?}
     */
    saveMarker() {
        /** @type {?} */
        const marker = this.getLast();
        marker.state = MarkerStateEnum.IDLE;
        this.selectedMarker = null;
    }
}
MarkerService.decorators = [
    { type: Injectable, args: [{
                providedIn: MarkerModule
            },] }
];
MarkerService.ctorParameters = () => [];
/** @nocollapse */ MarkerService.ngInjectableDef = i0.defineInjectable({ factory: function MarkerService_Factory() { return new MarkerService(); }, token: MarkerService, providedIn: i1.MarkerModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcC8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGVtYXAvbWFwL21hcmtlci9tYXJrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBS3JELE1BQU07SUFjRjtRQVpRLGFBQVEsR0FBYSxFQUFFLENBQUM7SUFjaEMsQ0FBQzs7OztJQVZELElBQVcsT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7OztJQU1NLGFBQWEsQ0FBQyxHQUFvQjtRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBZSxDQUNyQyxHQUFHLEVBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxHQUFvQjs7Y0FDdkMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUM1QixRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QyxHQUFHLEVBQUUsR0FBRztZQUNSLFNBQVMsRUFBRSxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVO1lBQ1YsOENBQThDO1lBQzlDLHlD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QUM7Ozs7SUFFTSxZQUFZOztjQUNULE1BQU0sR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLFFBQVEsRUFBRTtZQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLE1BQWM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sVUFBVTs7Y0FDUCxNQUFNLEdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNyQyxNQUFNLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQzs7O1lBNUhKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsWUFBWTthQUMzQjs7Ozs7Ozs7O0lBRUcsdUNBQStCOzs7OztJQUMvQixpQ0FBZ0M7Ozs7O0lBRWhDLHVDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtlck1vZHVsZSB9IGZyb20gJy4vbWFya2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4vbW9kZWxzL21hcmtlci5tb2RlbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFya2VyU3RhdGVFbnVtIH0gZnJvbSAnLi9lbnVtL21hcmtlci5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46IE1hcmtlck1vZHVsZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFya2VyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkTWFya2VyOiBNYXJrZXI7XHJcbiAgICBwcml2YXRlIF9tYXJrZXJzOiBNYXJrZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX21hcmtlckNsdXN0ZXI6IE1hcmtlckNsdXN0ZXJlcjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcmtlcnMoKTogTWFya2VyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFya2VyQ2x1c3RlcigpOiBNYXJrZXJDbHVzdGVyZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJDbHVzdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQ2x1c3RlcihtYXA6IGdvb2dsZS5tYXBzLk1hcCkge1xyXG4gICAgICAgIHRoaXMuX21hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyKFxyXG4gICAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICAgIHRoaXMubWFya2Vyc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyQ2x1c3Rlci5zZXRNYXhab29tKDE2KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJNYXJrZXJPbkNsaWNrKG1hcDogZ29vZ2xlLm1hcHMuTWFwKSB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcih0aGlzLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC0xLCAtMSksXHJcbiAgICAgICAgICAgIG1hcDogbWFwLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAvLyBpY29uOiB7XHJcbiAgICAgICAgICAgIC8vICAgdXJsOiBcImFzc2V0cy9pbWcvdGFyZ2V0X3NhbWlfbWVkaXVtLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG4gICAgICAgICAgICAvLyAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDI1MCwgMjUwKVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoXHJcbiAgICAgICAgICAgIG1hcCxcclxuICAgICAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFBvc2l0aW9uKGV2ZW50LmxhdExuZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlckNsdXN0ZXIuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgbWFwLnBhblRvKHRoaXMuZ2V0TGFzdCgpLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbWFya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRHZW9jb2RlRnJvbVNlbGVjdGVkTWFya2VyKCk6IGdvb2dsZS5tYXBzLkxhdExuZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNYXJrZXIuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IE1hcmtlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21hcmtlcnNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExhc3QoKTogTWFya2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vyc1t0aGlzLl9tYXJrZXJzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3VudE1hcmtlcnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNlbGVjdGVkTWFya2VyKG1hcmtlcjogTWFya2VyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IHRoaXMuX21hcmtlcnMuZmluZCh4ID0+IHggPT09IG1hcmtlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnZXRNYXJrZXJJbkNyZWF0aW9uU3RhdGUoKTogTWFya2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5maW5kKHggPT4geC5zdGF0ZSA9PT0gTWFya2VyU3RhdGVFbnVtLkNSRUFUSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWFya2VyKG1hcmtlcjogTWFya2VyKSB7XHJcbiAgICAgICAgbWFya2VyLnN0YXRlID0gTWFya2VyU3RhdGVFbnVtLkNSRUFUSU9OO1xyXG4gICAgICAgIHRoaXMuX21hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSBtYXJrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZU1hcmtlcihjbG9ja3dpc2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtYXJrZXJJbmRleCA9IHRoaXMuX21hcmtlcnMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICB4ID0+IHggPT09IHRoaXMuc2VsZWN0ZWRNYXJrZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgJyNtYXJrZXJMYXllciBpbWcnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSBlbGVtZW50c1ttYXJrZXJJbmRleF07XHJcbiAgICAgICAgaWYgKGNsb2Nrd2lzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgKz0gNztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZSgnICsgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlICsgJ2RlZyknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSAtPSA3O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgICAgICAncm90YXRlKCcgKyB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgKyAnZGVnKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVNYXJrZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyOiBNYXJrZXIgPSB0aGlzLl9tYXJrZXJzW3RoaXMuX21hcmtlcnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG1hcmtlci5zdGF0ZSA9PT0gTWFya2VyU3RhdGVFbnVtLkNSRUFUSU9OKSB7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlcnMgPSB0aGlzLl9tYXJrZXJzLnNsaWNlKDAsIHRoaXMuY291bnRNYXJrZXJzKCkgLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlTWFya2VyKG1hcmtlcjogTWFya2VyKTogdm9pZCB7XHJcbiAgICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtYXJrZXI6IE1hcmtlciA9IHRoaXMuZ2V0TGFzdCgpO1xyXG4gICAgICAgIG1hcmtlci5zdGF0ZSA9IE1hcmtlclN0YXRlRW51bS5JRExFO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==