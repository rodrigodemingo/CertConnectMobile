import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {SalaryCertificatePage} from '../salary-certificate/salary-certificate';
@IonicPage()
@Component({
  selector: 'page-hr',
  templateUrl: 'hr.html',
})
export class HrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HrPage');
  }
  salaryCertificate(){
    this.navCtrl.push(SalaryCertificatePage);
  }
}
