import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlutePageRoutingModule } from './glute-routing.module';

import { GlutePage } from './glute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlutePageRoutingModule
  ],
  declarations: [GlutePage]
})
export class GlutePageModule {}
