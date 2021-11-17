import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquatsPageRoutingModule } from './squats-routing.module';

import { SquatsPage } from './squats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquatsPageRoutingModule
  ],
  declarations: [SquatsPage]
})
export class SquatsPageModule {}
