import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BridgePageRoutingModule } from './bridge-routing.module';

import { BridgePage } from './bridge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BridgePageRoutingModule
  ],
  declarations: [BridgePage]
})
export class BridgePageModule {}
