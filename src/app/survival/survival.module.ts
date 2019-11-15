import { NgModule } from '@angular/core';
import { SurvivalComponent } from './survival.component';
import { SharedModule } from '../shared/modules/shared.module';
import { SurvivalRoutingModule } from './survival-routing.module';
import { CommonModule } from '@angular/common';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  declarations: [
    SurvivalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SurvivalRoutingModule
  ],
  providers: [
    ScreenOrientation
  ]
})
export class SurvivalModule { }
