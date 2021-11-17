import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrianglePage } from './triangle.page';

const routes: Routes = [
  {
    path: '',
    component: TrianglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrianglePageRoutingModule {}
