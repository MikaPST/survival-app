import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble.component';
import { BubbleRoutingModule } from './bubble-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    BubbleComponent
  ],
  imports: [
    CommonModule,
    BubbleRoutingModule,
    SharedModule
  ]
})
export class BubbleModule { }
