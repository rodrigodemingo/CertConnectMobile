import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverCarePage } from './driver-care';

@NgModule({
  declarations: [
    DriverCarePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverCarePage),
  ],
  exports: [
    DriverCarePage
  ]
})
export class DriverCarePageModule {}
