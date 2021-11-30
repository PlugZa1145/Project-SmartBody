import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RussianPage } from './russian.page';

const routes: Routes = [
  {
    path: '',
    component: RussianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RussianPageRoutingModule {}
