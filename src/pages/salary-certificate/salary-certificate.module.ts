import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaryCertificatePage } from './salary-certificate';

@NgModule({
  declarations: [
    SalaryCertificatePage,
  ],
  imports: [
    IonicPageModule.forChild(SalaryCertificatePage),
  ],
  exports: [
    SalaryCertificatePage
  ]
})
export class SalaryCertificatePageModule {}
