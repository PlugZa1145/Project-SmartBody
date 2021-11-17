import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrianglePageRoutingModule } from './triangle-routing.module';

import { TrianglePage } from './triangle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrianglePageRoutingModule
  ],
  declarations: [TrianglePage]
})
export class TrianglePageModule {}
