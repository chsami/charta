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
/** @nocollapse */
MarkerService.ctorParameters = () => [];
/** @nocollapse */ MarkerService.ngInjectableDef = i0.defineInjectable({ factory: function MarkerService_Factory() { return new MarkerService(); }, token: MarkerService, providedIn: i1.MarkerModule });
if (false) {
    /** @type {?} */
    MarkerService.prototype.selectedMarker;
    /** @type {?} */
    MarkerService.prototype._markers;
    /** @type {?} */
    MarkerService.prototype._markerCluster;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zYWNoLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZ29vZ2xlbWFwL21hcC9tYXJrZXIvbWFya2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQU9yRCxNQUFNO0lBY0Y7d0JBWjZCLEVBQUU7S0FjOUI7Ozs7UUFWVSxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7OztRQUdkLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDOzs7Ozs7SUFPeEIsYUFBYSxDQUFDLEdBQW9CO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxlQUFlLENBQ3JDLEdBQUcsRUFDSCxJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozs7O0lBRy9CLHFCQUFxQixDQUFDLEdBQW9COztRQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDNUIsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsR0FBRyxFQUFFLEdBQUc7WUFDUixTQUFTLEVBQUUsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJO1NBTWxCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDekIsR0FBRyxFQUNILE9BQU8sRUFD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QUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM5Qjs7Ozs7O0lBR0UsVUFBVSxDQUFDLE1BQWM7UUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHakIsVUFBVTs7UUFDYixNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsTUFBTSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDOzs7O1lBM0hsQyxVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLFlBQVk7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXJNb2R1bGUgfSBmcm9tICcuL21hcmtlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuL21vZGVscy9tYXJrZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtlclN0YXRlRW51bSB9IGZyb20gJy4vZW51bS9tYXJrZXIuZW51bSc7XHJcblxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImdvb2dsZW1hcHNcIiAvPlxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogTWFya2VyTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRNYXJrZXI6IE1hcmtlcjtcclxuICAgIHByaXZhdGUgX21hcmtlcnM6IE1hcmtlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfbWFya2VyQ2x1c3RlcjogTWFya2VyQ2x1c3RlcmVyO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFya2VycygpOiBNYXJrZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYXJrZXJDbHVzdGVyKCk6IE1hcmtlckNsdXN0ZXJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlckNsdXN0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDbHVzdGVyKG1hcDogZ29vZ2xlLm1hcHMuTWFwKSB7XHJcbiAgICAgICAgdGhpcy5fbWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyZXIoXHJcbiAgICAgICAgICAgIG1hcCxcclxuICAgICAgICAgICAgdGhpcy5tYXJrZXJzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyLnNldE1heFpvb20oMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3Rlck1hcmtlck9uQ2xpY2sobWFwOiBnb29nbGUubWFwcy5NYXApIHtcclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoLTEsIC0xKSxcclxuICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIC8vIGljb246IHtcclxuICAgICAgICAgICAgLy8gICB1cmw6IFwiYXNzZXRzL2ltZy90YXJnZXRfc2FtaV9tZWRpdW0ucG5nXCIsXHJcbiAgICAgICAgICAgIC8vICAgb3JpZ2luOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMCksXHJcbiAgICAgICAgICAgIC8vICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoMjUwLCAyNTApXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihcclxuICAgICAgICAgICAgbWFwLFxyXG4gICAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXJrZXIuc2V0UG9zaXRpb24oZXZlbnQubGF0TG5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2VyQ2x1c3Rlci5hZGRNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgICAgICAgICBtYXAucGFuVG8odGhpcy5nZXRMYXN0KCkuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBtYXJrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEdlb2NvZGVGcm9tU2VsZWN0ZWRNYXJrZXIoKTogZ29vZ2xlLm1hcHMuTGF0TG5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE1hcmtlci5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kQnlJbmRleChpbmRleDogbnVtYmVyKTogTWFya2VyIHtcclxuICAgICAgICBpZiAodGhpcy5fbWFya2Vyc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnNbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TGFzdCgpOiBNYXJrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzW3RoaXMuX21hcmtlcnMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvdW50TWFya2VycygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2VsZWN0ZWRNYXJrZXIobWFya2VyOiBNYXJrZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gdGhpcy5fbWFya2Vycy5maW5kKHggPT4geCA9PT0gbWFya2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdldE1hcmtlckluQ3JlYXRpb25TdGF0ZSgpOiBNYXJrZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmZpbmQoeCA9PiB4LnN0YXRlID09PSBNYXJrZXJTdGF0ZUVudW0uQ1JFQVRJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYXJrZXIobWFya2VyOiBNYXJrZXIpIHtcclxuICAgICAgICBtYXJrZXIuc3RhdGUgPSBNYXJrZXJTdGF0ZUVudW0uQ1JFQVRJT047XHJcbiAgICAgICAgdGhpcy5fbWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IG1hcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm90YXRlTWFya2VyKGNsb2Nrd2lzZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlckluZGV4ID0gdGhpcy5fbWFya2Vycy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIHggPT4geCA9PT0gdGhpcy5zZWxlY3RlZE1hcmtlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHM6IE5vZGVMaXN0T2Y8RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAnI21hcmtlckxheWVyIGltZydcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IGVsZW1lbnRzW21hcmtlckluZGV4XTtcclxuICAgICAgICBpZiAoY2xvY2t3aXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSArPSA3O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgICAgICAncm90YXRlKCcgKyB0aGlzLl9tYXJrZXJzW21hcmtlckluZGV4XS5yb3RhdGUgKyAnZGVnKSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2Vyc1ttYXJrZXJJbmRleF0ucm90YXRlIC09IDc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgICAgICdyb3RhdGUoJyArIHRoaXMuX21hcmtlcnNbbWFya2VySW5kZXhdLnJvdGF0ZSArICdkZWcpJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZU1hcmtlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtYXJrZXI6IE1hcmtlciA9IHRoaXMuX21hcmtlcnNbdGhpcy5fbWFya2Vycy5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobWFya2VyLnN0YXRlID09PSBNYXJrZXJTdGF0ZUVudW0uQ1JFQVRJT04pIHtcclxuICAgICAgICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2VycyA9IHRoaXMuX21hcmtlcnMuc2xpY2UoMCwgdGhpcy5jb3VudE1hcmtlcnMoKSAtIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVNYXJrZXIobWFya2VyOiBNYXJrZXIpOiB2b2lkIHtcclxuICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlTWFya2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlcjogTWFya2VyID0gdGhpcy5nZXRMYXN0KCk7XHJcbiAgICAgICAgbWFya2VyLnN0YXRlID0gTWFya2VyU3RhdGVFbnVtLklETEU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlciA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19