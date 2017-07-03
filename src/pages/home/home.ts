import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HrPage } from '../hr/hr';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  hrPage(){
    this.navCtrl.push(HrPage);
  }
}
