import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepUpsPage } from './step-ups.page';

const routes: Routes = [
  {
    path: '',
    component: StepUpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepUpsPageRoutingModule {}
