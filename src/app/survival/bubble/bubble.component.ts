import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements AfterViewChecked{

  constructor() {
  }
  
  ngAfterViewChecked(){
    console.log("Bubble Routed");
   }

  
}
