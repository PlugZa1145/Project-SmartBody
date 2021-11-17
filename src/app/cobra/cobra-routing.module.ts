import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobraPage } from './cobra.page';

const routes: Routes = [
  {
    path: '',
    component: CobraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobraPageRoutingModule {}
