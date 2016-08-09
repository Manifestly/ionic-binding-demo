import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private steps: any;

  constructor(public navCtrl: NavController) {
    this.steps = [
      {
        title: 'a',
        completed_at: null,
        header_step: true
      },
      {
        title: 'a 1',
        completed_at: null,
        header_step: false
      },
      {
        title: 'a 2',
        completed_at: Date.now(),
        header_step: false
      }
    ];
  }

  public toggleStep(step: any): void {
    console.log(step);
    if (step.completed_at) {
      step.completed_at = null;
    } else {
      step.completed_at = Date.now();
    }
    console.log(step);
  }
}
