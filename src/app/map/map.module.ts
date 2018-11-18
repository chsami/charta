import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapPage } from './map.page';
import { MapModule } from '../googlemap/map/map.module';
import { MarkerModule } from '../googlemap/map/marker/marker.module';
import { GestureModule } from '../googlemap/gesture/gesture.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapModule,
    MarkerModule,
    RouterModule.forChild([{ path: '', component: MapPage }])
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
