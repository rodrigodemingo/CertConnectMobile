import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaryCertificateRequestPage } from './salary-certificate-request';

@NgModule({
  declarations: [
    SalaryCertificateRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(SalaryCertificateRequestPage),
  ],
  exports: [
    SalaryCertificateRequestPage
  ]
})
export class SalaryCertificateRequestPageModule {}
