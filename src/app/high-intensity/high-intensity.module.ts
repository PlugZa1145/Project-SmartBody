import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighIntensityPageRoutingModule } from './high-intensity-routing.module';

import { HighIntensityPage } from './high-intensity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighIntensityPageRoutingModule
  ],
  declarations: [HighIntensityPage]
})
export class HighIntensityPageModule {}
