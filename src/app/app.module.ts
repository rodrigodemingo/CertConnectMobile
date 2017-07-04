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
import {SalaryCertificatePage} from '../pages/salary-certificate/salary-certificate'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SplashScreenPage,
    RegisterPage,
    HrPage,
    SalaryCertificatePage
  ],
  imports: [
    BrowserModule,
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
    SalaryCertificatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
