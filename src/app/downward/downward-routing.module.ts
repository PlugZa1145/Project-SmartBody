import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownwardPage } from './downward.page';

const routes: Routes = [
  {
    path: '',
    component: DownwardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownwardPageRoutingModule {}
