import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "bubble", component: BubbleComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BubbleRoutingModule { }
