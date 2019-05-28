export interface GoogleMapsOptions extends google.maps.MapOptions {
    compassImage?: string;
    smoothZoom?: boolean;
    locationCrosshair?: boolean;
    locationCrosshairCallback?: Function;
}
