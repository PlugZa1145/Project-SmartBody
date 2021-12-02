import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndAerobicAnaerobicPageRoutingModule } from './end-aerobic-anaerobic-routing.module';

import { EndAerobicAnaerobicPage } from './end-aerobic-anaerobic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndAerobicAnaerobicPageRoutingModule
  ],
  declarations: [EndAerobicAnaerobicPage]
})
export class EndAerobicAnaerobicPageModule {}
