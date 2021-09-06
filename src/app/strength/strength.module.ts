import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrengthPageRoutingModule } from './strength-routing.module';

import { StrengthPage } from './strength.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrengthPageRoutingModule
  ],
  declarations: [StrengthPage]
})
export class StrengthPageModule {}
