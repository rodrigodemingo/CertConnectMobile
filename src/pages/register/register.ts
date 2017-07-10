import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Http,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {LoginPage} from '../login/login';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
registerForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fb:FormBuilder,public http:Http) {
    this.registerForm=fb.group({
     'displayName':[null,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(25)])],
     'driverID':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
     'mobileNumber':[null,Validators.compose([Validators.required,Validators.minLength(9),Validators.maxLength(9)])],
     'password':[null,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
registerUser(form){
    let headers=new Headers();
    headers.append("Content-Type","application/json");
    var guid=this.generateGUID();
    if(localStorage.getItem("deviceUniqueID")==null){
      localStorage.setItem("deviceUniqueID",guid);
    }else{
      guid=localStorage.getItem("deviceUniqueID");
    }
    this.http.post("http://localhost:65168/api/Member/Register",
      JSON.stringify({"DisplayName":form.displayName,"driverID":form.driverID,"mobileNumber":form.mobileNumber,"userName":form.driverID,"password":form.password,"deviceID":guid,"platform":"android"}),{headers:headers}
      ).map(res=>res.json()).subscribe(data=>{
        let registerStatus={
            response:"Registered Successfully"
        };
        this.navCtrl.push(LoginPage,registerStatus);
      },err=>{console.log(err);});
}
generateGUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4()+'-'+Date.now();
  }
loginUser(){
  this.navCtrl.push(LoginPage);
}
}
