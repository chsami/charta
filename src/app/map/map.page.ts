import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    ViewChildren,
    AfterViewInit,
    QueryList
} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MapService } from '../googlemap/map/map.service';
import { GestureService } from '../googlemap/gesture/gesture.service';
import { environment } from '../../environments/environment';
import { MarkerService } from '../googlemap/map/marker/marker.service';
import { Marker } from '../googlemap/map/marker/models/marker';

/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

@Component({
    selector: 'app-map',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit, AfterViewInit {
    myInput: string;
    searchResults: any[];
    hideList: boolean;

    @ViewChild('map') mapElement: ElementRef;

    constructor(
        private mapService: MapService,
        private markerService: MarkerService
    ) {}

    ngOnInit(): void {
        /*this.gestureService
            .registerGesture(['pinch', 'rotate', 'pan'], mydiv)
            .then((hammer: HammerManager) => {
                if (hammer) {
                    hammer.on('pinch rotate pan', event => {
                        this.presentToast(event.scale.toString());
                    });
                }
            });*/
    }

    ngAfterViewInit(): void {
        const lat: number = -34.929;
        const long: number = 138.601;
        // init map
        const map = this.mapService.init(
            this.mapElement,
            lat,
            long,
            environment.GOOGLE_MAPS_API_KEY
        );
        // init cluster
        this.markerService.createCluster(map);
        // add marker when we click on map
        google.maps.event.addListener(
            map,
            'click',
            event => {
                const marker = new Marker(this.markerService, {
                    position: event.latLng,
                    map: map,
                    draggable: true,
                    clickable: true
                    // icon: {
                    //   url: "assets/img/target_sami_medium.png",
                    //   origin: new google.maps.Point(0, 0),
                    //   scaledSize: new google.maps.Size(250, 250)
                    // }
                });
                this.markerService.markerCluster.addMarker(marker);
                this.markerService.addMarker(marker);
                map.panTo(this.markerService.getLast().getPosition());
                 // add click event to the marker
                marker.addListener('click', () => {
                    this.mapService.getAddressFromGeocode(marker.getPosition()).then((result) => {
                        console.log(result);
                    });
                });
            }
        );
    }

    public rotateMarker(clockwise: boolean): void {
        this.markerService.rotateMarker(clockwise);
    }

    public deleteMarker() {
        this.markerService.deleteMarker();
    }

    public get selectedMarker(): Marker {
        return this.selectedMarker;
    }

    public saveMarker() {
        const marker = new Marker(this.markerService, {
            position: this.markerService.getMarkerInCreationState.getPosition(),
            map: this.mapService.map,
            clickable: true
        });
        this.markerService.saveMarker();
    }

    public markerInCreationState(): Marker {
        return this.markerService.getMarkerInCreationState;
    }

    onChange(event) {
        this.getLocationFromAddress();
    }

    getLocationFromAddress() {
        this.mapService
            .getGeocodeFromAddress(this.myInput)
            .subscribe((response: any) => {
                console.log(response.results[0]);
                this.searchResults =
                    response.results && response.results.length > 0
                        ? response.results
                        : [];
            });
    }

    pinpointAddressOnMap(location: any) {
        this.mapService.map.panTo(location);
    }

    onCancel(event) {}

    onBlur(event) {
        setTimeout(() => {
            this.hideList = true;
        }, 100);
    }

    onFocus(event) {
        this.hideList = false;
    }

    /*async presentToast(message: string): Promise<void> {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }*/
}
