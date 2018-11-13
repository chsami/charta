import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsComponent } from './googlemaps.component';
import { GoogleMapsService } from './googlemaps.service';

@NgModule({
  declarations: [
    GoogleMapsComponent
  ],
  exports: [
      GoogleMapsComponent
  ],
  imports: [
  ],
  providers: [GoogleMapsService]
})
export class GoogleMapsModule { }
