/// <reference types="googlemaps" />
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
export declare class MapService {
    private http;
    private _map;
    private _key;
    constructor(http: HttpClient);
    readonly map: google.maps.Map;
    readonly key: string;
    /**
     * Loadmap
     * @param mapElement html map elemnt
     */
    init(mapElement: ElementRef, mapOptions: google.maps.MapOptions, compass: boolean, key: string): google.maps.Map;
    getGeocodeFromAddress(address: string): Observable<any>;
    getAddressFromGeocode(location: google.maps.LatLng): Promise<any>;
    addCompass(): void;
}
