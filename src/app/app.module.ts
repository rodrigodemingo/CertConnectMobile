import { BrowserModule } from '@angular/platform-browser';
import { DriverCarePage } from '../pages/driver-care/driver-care';
import { ErrorHandler, NgModule } from '@angular/core';
import { FinancePage } from '../pages/finance/finance';
import { HomePage } from '../pages/home/home';
import { HrPage } from '../pages/hr/hr';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { MeterPage } from '../pages/meter/meter';
import { MyApp } from './app.component';
import { OperationsPage } from '../pages/operations/operations';
import { RegisterPage } from '../pages/register/register';
import { SalaryCertificatePage } from '../pages/salary-certificate/salary-certificate';
import { SalaryCertificateRequestPage } from '../pages/salary-certificate-request/salary-certificate-request';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TrainingPage } from '../pages/training/training';

@NgModule({
  declarations: [
    DriverCarePage,
    FinancePage,
    HomePage,
    HrPage,
    LoginPage,
    MeterPage,
    MyApp,
    OperationsPage,
    RegisterPage,
    SalaryCertificatePage,
    SalaryCertificateRequestPage,
    SplashScreenPage,
    TrainingPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DriverCarePage,
    FinancePage,
    HomePage,
    HrPage,
    LoginPage,
    MeterPage,
    MyApp,
    OperationsPage,
    RegisterPage,
    SalaryCertificatePage,
    SalaryCertificateRequestPage,
    SplashScreenPage,
    TrainingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }