import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TricepPageRoutingModule } from './tricep-routing.module';

import { TricepPage } from './tricep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TricepPageRoutingModule
  ],
  declarations: [TricepPage]
})
export class TricepPageModule {}
