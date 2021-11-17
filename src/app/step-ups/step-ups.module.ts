import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepUpsPageRoutingModule } from './step-ups-routing.module';

import { StepUpsPage } from './step-ups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepUpsPageRoutingModule
  ],
  declarations: [StepUpsPage]
})
export class StepUpsPageModule {}
