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
    this.googleMapsService.loadMap(this.mapElement);
  }

  constructor(private googleMapsService: GoogleMapsService) {}

 

  public rotateMarker(clockwise: boolean): void {
    this.googleMapsService.rotateMarker(clockwise);
  }

  public deleteMarker() {
    this.googleMapsService.deleteMarker();
  }

  public get selectedMarker(): Marker {
    return this.selectedMarker;
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
