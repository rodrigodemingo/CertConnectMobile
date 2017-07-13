import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeterPage } from './meter';

@NgModule({
  declarations: [
    MeterPage,
  ],
  imports: [
    IonicPageModule.forChild(MeterPage),
  ],
  exports: [
    MeterPage
  ]
})
export class MeterPageModule {}
