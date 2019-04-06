import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapPage } from './map.page';
import { MapModule, MarkerModule } from '../../../dist/sach-map';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MapPage }]),
    MapModule.forRoot({
        key: environment.GOOGLE_MAPS_API_KEY
    }),
    MarkerModule.forRoot()
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
