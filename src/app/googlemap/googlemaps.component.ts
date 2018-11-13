import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsService } from './googlemaps.service';
import { Marker } from './models/marker';

/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
/// <reference path="../../../node_modules/@types/markerclustererplus/index.d.ts" />


@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  ngOnInit(): void {
    this.loadMap();
  }

  constructor(private googleMapsService: GoogleMapsService) {}

  /**
   * Load google maps
   */
  loadMap() {
    const latLng = new google.maps.LatLng(-34.929, 138.601);

    const mapOptions: google.maps.MapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      // rotateControl: true,
      // tilt: 45,
      // panControl: true,
      disableDefaultUI: true
      // rotateControlOptions: {
      //   position: google.maps.ControlPosition.RIGHT_CENTER
      // }
    };



    this.googleMapsService.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const markerCluster = new MarkerClusterer(this.googleMapsService.map, this.googleMapsService._markers);

    const overlay = new google.maps.OverlayView();
    overlay.draw = function() {
      this.getPanes().markerLayer.id = 'markerLayer';
    };
    overlay.setMap(this.googleMapsService.map);

    google.maps.event.addListener(this.googleMapsService.map, 'click', event => {
      const marker = new Marker(this.googleMapsService, {
        position: event.latLng,
        map: this.googleMapsService.map,
        draggable: true,
        clickable: true
        // icon: {
        //   url: "assets/img/target_sami_medium.png",
        //   origin: new google.maps.Point(0, 0),
        //   scaledSize: new google.maps.Size(250, 250)
        // }
      });
      markerCluster.addMarker(marker);
      this.googleMapsService.addMarker(marker);
      this.googleMapsService.map.panTo(this.googleMapsService.getLast().getPosition());
    });
  }

  public rotateMarker(clockwise: boolean): void {
    this.googleMapsService.rotateMarker(clockwise);
  }

  public deleteMarker() {
    this.googleMapsService.deleteMarker();
  }

  public get selectedMarker(): number {
    return this.googleMapsService.selectedMarker;
  }

  public saveMarker() {
    const marker = new Marker(this.googleMapsService, {
      position: this.googleMapsService.getMarkerInCreationState.getPosition(),
      map: this.googleMapsService.map,
      clickable: true
    });
    this.googleMapsService.saveMarker();
  }

  public markerInCreationState(): Marker {
    return this.googleMapsService.getMarkerInCreationState;
  }
}
