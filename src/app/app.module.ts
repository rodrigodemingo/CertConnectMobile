import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import {RegisterPage} from '../pages/register/register';
import {HrPage} from '../pages/hr/hr';
import {SalaryCertificatePage} from '../pages/salary-certificate/salary-certificate';
import {SalaryCertificateRequestPage} from '../pages/salary-certificate-request/salary-certificate-request';
import {OperationsPage} from '../pages/operations/operations';
import{HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SplashScreenPage,
    RegisterPage,
    HrPage,
    SalaryCertificatePage,
    SalaryCertificateRequestPage,
    OperationsPage

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SplashScreenPage,
    RegisterPage,
    HrPage,
    SalaryCertificatePage,
    SalaryCertificateRequestPage,
    OperationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
