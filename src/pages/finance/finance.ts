import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { TrainingPage } from '../training/training';
import { MeterPage } from '../meter/meter';
import { DriverCarePage } from '../driver-care/driver-care';
import { HrPage } from '../hr/hr';
// import { FinancePage } from '../finance/finance';
import { OperationsPage } from '../operations/operations';
declare var initTab: any;

/**
 * Generated class for the FinancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html',
})
export class FinancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinancePage');
    initTab();
  }
  // Name of the links from HTML clicks.
  loadTrainingPage() {
    this.navCtrl.push(TrainingPage);
  }
  loadMeterPage() {
    this.navCtrl.push(MeterPage);
  }
  loadDriverCarePage() {
    this.navCtrl.push(DriverCarePage);
  }
  loadHrPage() {
    this.navCtrl.push(HrPage);
  }
  loadFinancePage() {
    this.navCtrl.push(FinancePage);
  }
  loadOperationsPage() {
    this.navCtrl.push(OperationsPage);
  }

}
