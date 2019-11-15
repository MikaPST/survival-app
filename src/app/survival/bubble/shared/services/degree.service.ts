import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  private degree: Subject<number>;   
 
  constructor(
    private screenOrientation: ScreenOrientation
  ) {
    this.degree = new Subject();
    let orientationType = "portrait";
    this.screenOrientation.onChange().subscribe(
      () => orientationType = screenOrientation.type.split("-")[0]
      );

    window.ondeviceorientation = (event) => {
      if ("portrait" === orientationType) {
        return this.degree.next(-event.beta);
      } else {
        this.degree.next(event.gamma);
      }
      
    };
   }

   getDegree(): Observable<number> {
     return this.degree.asObservable();
   }
}
