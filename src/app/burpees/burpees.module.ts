import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurpeesPageRoutingModule } from './burpees-routing.module';

import { BurpeesPage } from './burpees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurpeesPageRoutingModule
  ],
  declarations: [BurpeesPage]
})
export class BurpeesPageModule {}
