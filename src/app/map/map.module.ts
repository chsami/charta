import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapPage } from './map.page';
import {  MapModule, MarkerModule } from 'sach-map';

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
