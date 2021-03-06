import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeComponent } from './degree.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ViewBubbleComponent } from 'src/app/survival/bubble/view-bubble/view-bubble.component';



@NgModule({
  declarations: [
    DegreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DegreeComponent
  ]
})
export class DegreeModule { }
