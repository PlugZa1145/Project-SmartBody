import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TricepPage } from './tricep.page';

const routes: Routes = [
  {
    path: '',
    component: TricepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TricepPageRoutingModule {}
