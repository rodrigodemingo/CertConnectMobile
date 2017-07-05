import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalaryCertificateRequestPage } from '../salary-certificate-request/salary-certificate-request'

@IonicPage()
@Component({
  selector: 'page-salary-certificate',
  templateUrl: 'salary-certificate.html',
})
export class SalaryCertificatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaryCertificatePage');
  }
  salaryCertificateRequest() {
    this.navCtrl.push(SalaryCertificateRequestPage);
  }
}
