import { Component } from '@angular/core';
import { TitleService } from './shared/services/title.service';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.scss'],
})
export class SurvivalComponent {

  protected title: String;

  constructor(
    private titleService: TitleService
  ) {
    this.title = "Survival";
    this.titleService.getTitle().subscribe(
      (value: string) => setTimeout(() => this.title = value)
    );
  }


}
