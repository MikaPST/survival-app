import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss'],
})
export class DegreeComponent {

  protected degreeGamma: number;
  protected degreeAlpha: number;
  protected degreeBeta: number;

  constructor() {
    this.degreeAlpha = 0;
    this.degreeGamma = 0;
    this.degreeBeta = 0;
    window.ondeviceorientation = (event) => {
      this.degreeAlpha = event.alpha; 
      this.degreeBeta = event.beta;
      this.degreeGamma = event.gamma;
    }
  }

}
