import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../googlemap/googlemaps.service';

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {
  myInput: string;
  searchResults: any[];
  hideList: boolean;

  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit() {}

  onChange(event) {
    this.googleMapsService
      .getGeocodeFromAddress(this.myInput)
      .subscribe((response: any) => {
        console.log(response.results[0]);
        this.searchResults = (response.results && response.results.length > 0) ? response.results : [];
      });
  }

  pinpointAddressOnMap(location: any) {
    this.googleMapsService.map.panTo(location);
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
}
