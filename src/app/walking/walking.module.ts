import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkingPageRoutingModule } from './walking-routing.module';

import { WalkingPage } from './walking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkingPageRoutingModule
  ],
  declarations: [WalkingPage]
})
export class WalkingPageModule {}
