import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurvivalComponent } from './survival.component';
import { CompassModule } from './compass/compass.module';
import { BubbleModule } from './bubble/bubble.module';
import { MapModule } from './map/map.module';
import { SurvivalRoutingModule } from './survival-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SurvivalComponent
  ],
  imports: [
    CommonModule,
    CompassModule,
    BubbleModule,
    MapModule,
    SurvivalRoutingModule,
    RouterModule
  ],
  exports: [
    SurvivalComponent
  ]
})
export class SurvivalModule { }
