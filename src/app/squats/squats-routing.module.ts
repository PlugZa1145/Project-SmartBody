import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquatsPage } from './squats.page';

const routes: Routes = [
  {
    path: '',
    component: SquatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquatsPageRoutingModule {}
