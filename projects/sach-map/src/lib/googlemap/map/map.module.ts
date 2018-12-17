import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsConfig } from './map.service';
import { IMapsConfig } from './models/maps.config.interface';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class MapModule {
    static forRoot(mapConfig: IMapsConfig): ModuleWithProviders {
        return {
          ngModule: MapModule,
          providers: [ {provide: MapsConfig, useValue: mapConfig} ]
        }
    }
 }
