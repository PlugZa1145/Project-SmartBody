import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlutePage } from './glute.page';

const routes: Routes = [
  {
    path: '',
    component: GlutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlutePageRoutingModule {}
