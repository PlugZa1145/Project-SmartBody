import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnaerobicPageRoutingModule } from './anaerobic-routing.module';

import { AnaerobicPage } from './anaerobic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnaerobicPageRoutingModule
  ],
  declarations: [AnaerobicPage]
})
export class AnaerobicPageModule {}
