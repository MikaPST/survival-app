import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble.component';
import { BubbleRoutingModule } from './bubble-routing.module';
import { SurvivalSharedModule } from '../shared/modules/survival-shared.module';
import { ViewBubbleModule } from './view-bubble/view-bubble.module';

@NgModule({
  declarations: [
    BubbleComponent
  ],
  imports: [
    CommonModule,
    ViewBubbleModule,
    SurvivalSharedModule,
    BubbleRoutingModule
  ]
})
export class BubbleModule { }
