import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DumbbellRowPageRoutingModule } from './dumbbell-row-routing.module';

import { DumbbellRowPage } from './dumbbell-row.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DumbbellRowPageRoutingModule
  ],
  declarations: [DumbbellRowPage]
})
export class DumbbellRowPageModule {}
