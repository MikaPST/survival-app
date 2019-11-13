import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "foo", component: FooComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FooRoutingModule { }
