import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBubbleComponent } from './view-bubble.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    ViewBubbleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ViewBubbleComponent
  ]
})
export class ViewBubbleModule { }
