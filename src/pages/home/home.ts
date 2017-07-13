import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HrPage } from '../hr/hr';
import { OperationsPage } from '../operations/operations';
import {TrainingPage} from '../training/training';
import  {MeterPage} from '../meter/meter';
import {DriverCarePage} from '../driver-care/driver-care';
import {FinancePage} from '../finance/finance'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log(localStorage.getItem("userToken"));
  }
  hrPage() {
    this.navCtrl.push(HrPage);
  }
  operationsPage() {
    this.navCtrl.push(OperationsPage);
  }
  trainingPage() {
    this.navCtrl.push(TrainingPage);
  }
  meterPage() {
    this.navCtrl.push(MeterPage);
  }
  driverCarePage() {
    this.navCtrl.push(DriverCarePage);
  }
  financePage() {
    this.navCtrl.push(FinancePage);
  }
}
