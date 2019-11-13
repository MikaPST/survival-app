import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompassComponent } from './compass.component';
import { CompassRoutingModule } from './compass-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    CompassComponent
  ],
  imports: [
    CommonModule,
    CompassRoutingModule,
    SharedModule
  ]
})
export class CompassModule { }
