import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AerobicAnaerobicPageRoutingModule } from './aerobic-anaerobic-routing.module';

import { AerobicAnaerobicPage } from './aerobic-anaerobic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AerobicAnaerobicPageRoutingModule
  ],
  declarations: [AerobicAnaerobicPage]
})
export class AerobicAnaerobicPageModule {}
