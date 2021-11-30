import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HighkicksPageRoutingModule } from './highkicks-routing.module';

import { HighkicksPage } from './highkicks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighkicksPageRoutingModule
  ],
  declarations: [HighkicksPage]
})
export class HighkicksPageModule {}
