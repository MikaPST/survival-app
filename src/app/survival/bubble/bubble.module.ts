import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble.component';
import { BubbleRoutingModule } from './bubble-routing.module';
import { SurvivalSharedModule } from '../shared/modules/survival-shared.module';
import { DegreeModule } from '../shared/component/degree/degree.module';



@NgModule({
  declarations: [
    BubbleComponent
  ],
  imports: [
    CommonModule,
    BubbleRoutingModule,
    DegreeModule,
    SurvivalSharedModule
  ]
})
export class BubbleModule { }
