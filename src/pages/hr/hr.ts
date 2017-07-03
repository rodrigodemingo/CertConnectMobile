import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';

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
}
