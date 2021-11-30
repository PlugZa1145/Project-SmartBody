import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighPage } from './high.page';

const routes: Routes = [
  {
    path: '',
    component: HighPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighPageRoutingModule {}
