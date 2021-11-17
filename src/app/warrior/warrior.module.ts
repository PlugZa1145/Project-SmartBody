import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarriorPageRoutingModule } from './warrior-routing.module';

import { WarriorPage } from './warrior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarriorPageRoutingModule
  ],
  declarations: [WarriorPage]
})
export class WarriorPageModule {}
