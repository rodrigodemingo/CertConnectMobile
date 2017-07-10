import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
import {Platform} from 'ionic-angular';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Http,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 loginForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,public fb:FormBuilder,public http:Http) {
    this.loginForm=fb.group({
     'userName':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
     'password':[null,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
    });
  }
  ionViewDidLoad() {
    if(this.navParams.get('response')!=null){
      alert(this.navParams.get('response'));
    }
  }
  registerPage(){
    this.navCtrl.push(RegisterPage);
  }
  homePage(form){
    let headers=new Headers();
    headers.append("Content-Type","application/json");
    var guid=this.generateGUID();
    console.log(guid);
    if(localStorage.getItem("deviceUniqueID")==null){
      localStorage.setItem("deviceUniqueID",guid);
    }else{
      guid=localStorage.getItem("deviceUniqueID");
    }
    this.http.post("http://localhost:65168/api/Member/Login",
      JSON.stringify({"deviceID":guid,"userName":form.userName,"password":form.password,"platform":"android"}),{headers:headers}
      ).map(res=>res.json()).subscribe(data=>{
        localStorage.setItem("userToken",data.ResponseObject["AuthToken"]);
        localStorage.setItem("displayName",data.ResponseObject["DisplayName"]);
        localStorage.setItem("driverID",data.ResponseObject["DriverID"]);
        localStorage.setItem("mobileNumber",data.ResponseObject["MobileNumber"]);
        this.navCtrl.push(HomePage);
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

}
