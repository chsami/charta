import { MarkerService } from './marker.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from '../map.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class MarkerModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: MarkerModule
        };
    }
 }
