<h1 align="center">Sach-Map</h1>

<p align="center">
Best way to quickly integrate <a href="https://getbootstrap.com/">Javascript Maps API</a> <a href="https://angular.io/">Angular</a>
</p>

## Getting Started

```bash
npm install sach-map --save
```

##### Add google maps api
#
```bash
  <script src="http://maps.google.com/maps/api/js?key=YOURKEY"></script>
```

If you want the placesService included

```bash
  <script src="http://maps.google.com/maps/api/js?key=YOURKEY&libraries=places"></script>
```

#####  Import module:
#
```bash
import {  MapModule } from 'sach-map';
```

##### Add the following in your HTML component:
#
```bash
<div #map id="map"></div>
```

##### Add the following in your (s)css component:
#
```bash
#map{
    height: 100%;
}
```

##### Init google maps:
#
```bash
import {MapService} from 'sach-map';

@ViewChild('map') mapElement: ElementRef;


const lat: number = -34.929;
const long: number = 138.601;
const location = new google.maps.LatLng(lat, long);
const mapOptions = {
    center: location,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
};
const map = this.mapService.init(
    this.mapElement,
    mapOptions,
    true,
    YOUR_API_KEY
);
```
####  When using markers:
#
```bash
import {  MarkerModule } from 'sach-map'; //in your module

{MarkerService} from 'sach-map'; //in your component or service
```

#####  Add to scripts in angular.json:
#
```bash
"node_modules/@google/markerclustererplus/src/markerclusterer.js"
```
