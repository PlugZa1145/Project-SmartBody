import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighIntensityPage } from './high-intensity.page';

const routes: Routes = [
  {
    path: '',
    component: HighIntensityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighIntensityPageRoutingModule {}
