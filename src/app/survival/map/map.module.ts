import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    SharedModule
  ]
    
  
})
export class MapModule { }
