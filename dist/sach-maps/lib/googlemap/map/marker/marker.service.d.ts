/// <reference types="markerclustererplus" />
/// <reference types="googlemaps" />
import { Marker } from './models/marker.model';
export declare class MarkerService {
    private selectedMarker;
    private _markers;
    private _markerCluster;
    readonly markers: Marker[];
    readonly markerCluster: MarkerClusterer;
    constructor();
    createCluster(map: google.maps.Map): void;
    registerMarkerOnClick(map: google.maps.Map): Marker;
    getGeocodeFromSelectedMarker(): google.maps.LatLng;
    findByIndex(index: number): Marker;
    getLast(): Marker;
    countMarkers(): number;
    setSelectedMarker(marker: Marker): void;
    readonly getMarkerInCreationState: Marker;
    addMarker(marker: Marker): void;
    rotateMarker(clockwise: boolean): void;
    deleteMarker(): void;
    hideMarker(marker: Marker): void;
    saveMarker(): void;
}
