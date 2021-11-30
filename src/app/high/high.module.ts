import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighPageRoutingModule } from './high-routing.module';

import { HighPage } from './high.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighPageRoutingModule
  ],
  declarations: [HighPage]
})
export class HighPageModule {}
