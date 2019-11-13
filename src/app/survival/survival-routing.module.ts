import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurvivalComponent } from './survival.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "survial", redirectTo: "survival/bubble"},
  {
    path: "survival", component: SurvivalComponent, children: [
      {
        path: "",
        loadChildren: () => import("./bubble/bubble.module")
          .then((mod) => mod.BubbleModule)
      },
      {
        path: "",
        loadChildren: () => import("./compass/compass.module")
          .then((mod) => mod.CompassModule)
      },
      {
        path: "",
        loadChildren: () => import("./map/map.module")
          .then((mod) => mod.MapModule)
      },

    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SurvivalRoutingModule { }
