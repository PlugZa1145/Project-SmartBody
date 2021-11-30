import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RussianPageRoutingModule } from './russian-routing.module';

import { RussianPage } from './russian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RussianPageRoutingModule
  ],
  declarations: [RussianPage]
})
export class RussianPageModule {}
