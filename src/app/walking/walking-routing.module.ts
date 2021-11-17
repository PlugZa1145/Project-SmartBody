import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkingPage } from './walking.page';

const routes: Routes = [
  {
    path: '',
    component: WalkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkingPageRoutingModule {}
