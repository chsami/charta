import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { MapService, MarkerService, Marker } from '../../../dist/sach-map';

@Component({
    selector: 'app-map',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit, AfterViewInit {
    selectedMarker: Marker;
    myInput: string;
    searchResults: any[];
    hideList: boolean;
    map: google.maps.Map;

    @ViewChild('map') mapElement: ElementRef;

    constructor(
        private mapService: MapService,
        private markerService: MarkerService
    ) { }

    ngOnInit(): void {
        // this.gestureService
        //     .registerGesture(['pinch', 'rotate', 'pan'], mydiv)
        //     .then((hammer: HammerManager) => {
        //         if (hammer) {
        //             hammer.on('pinch rotate pan', event => {
        //                 this.presentToast(event.scale.toString());
        //             });
        //         }
        //     });
    }
    ngAfterViewInit(): void {
        const lat: number = -34.929;
        const long: number = 138.601;
        const location = new google.maps.LatLng(lat, long);
        // init map
        this.map = this.mapService.init(
            this.mapElement,
            {
                center: location,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.SATELLITE,
                disableDefaultUI: true,
                smoothZoom: true,
                compassImage: '',
                locationCrosshair: true,
                locationCrosshairCallback: this.goToCurrentLocation
            }
        ).registerPlacesService();
        // init cluster
        this.markerService.createCluster(this.map, {
            maxZoom: 16
        });
        // add marker when we click on map
        google.maps.event.addListener(this.map, 'click', event => {
            const marker = new Marker(this.markerService, {
                position: event.latLng,
                map: this.map,
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
            this.map.panTo(this.markerService.getLast().getPosition());
            // add click event to the marker
            marker.addListener('click', () => {
                this.selectedMarker = marker;
                this.mapService
                    .getAddressFromGeocode(marker.getPosition())
                    .then(result => {
                        console.log(result);
                    });
            });
        });
    }

    private goToCurrentLocation(position: Position) {
        this.map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }

    public deleteMarker() {
        if (this.selectedMarker) {
            this.markerService.deleteMarker(this.selectedMarker);
            this.markerService.markerCluster.removeMarker(this.selectedMarker);
            this.selectedMarker = null;
        }
    }

    public hideMarkers() {
        this.markerService.hideMarkers();
    }

    public saveMarker() {
        const marker = new Marker(this.markerService, {
            position: this.markerService.getLast().getPosition(),
            map: this.mapService.map,
            clickable: true
        });
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

    onCancel(event) { }

    onBlur(event) {
        setTimeout(() => {
            this.hideList = true;
        }, 100);
    }

    onFocus(event) {
        this.hideList = false;
    }
}
