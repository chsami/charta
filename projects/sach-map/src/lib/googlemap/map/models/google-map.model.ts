export class GoogleMaps extends google.maps.Map {

    private _placesService: google.maps.places.PlacesService;

    public get placesService(): google.maps.places.PlacesService {
        return this._placesService;
    }


    /**
     *
     */
    constructor(mapDiv: Element|null, opts?: google.maps.MapOptions) {
        super(mapDiv, opts);
    }

    public registerPlacesService(): GoogleMaps  {
        this._placesService = new google.maps.places.PlacesService(this);
        return this;
    }




}
