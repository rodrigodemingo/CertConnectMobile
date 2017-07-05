import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HrPage } from '../hr/hr';
import { OperationsPage } from '../operations/operations'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  hrPage() {
    this.navCtrl.push(HrPage);
  }
  operationsPage() {
    this.navCtrl.push(OperationsPage);
  }
}
