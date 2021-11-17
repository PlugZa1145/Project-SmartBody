import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YogaPageRoutingModule } from './yoga-routing.module';

import { YogaPage } from './yoga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YogaPageRoutingModule
  ],
  declarations: [YogaPage]
})
export class YogaPageModule {}
