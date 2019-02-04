import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMapsConfig } from './models/maps.config.interface';
import { MapsConfig, MapService } from './map.service';

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
