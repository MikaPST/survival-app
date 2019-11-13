import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FooRoutingModule } from './foo/foo-routing.module';
import { SurvivalRoutingModule } from './survival/survival-routing.module';
import { BubbleRoutingModule } from './survival/bubble/bubble-routing.module';
import { CompassRoutingModule } from './survival/compass/compass-routing.module';
import { MapRoutingModule } from './survival/map/map-routing.module';

const routes: Routes = [];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule,
    FooRoutingModule,
    SurvivalRoutingModule,
    BubbleRoutingModule,
    CompassRoutingModule,
    MapRoutingModule
  ]
})
export class AppRoutingModule {}
