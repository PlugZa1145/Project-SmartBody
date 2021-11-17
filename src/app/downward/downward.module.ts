import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownwardPageRoutingModule } from './downward-routing.module';

import { DownwardPage } from './downward.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownwardPageRoutingModule
  ],
  declarations: [DownwardPage]
})
export class DownwardPageModule {}
