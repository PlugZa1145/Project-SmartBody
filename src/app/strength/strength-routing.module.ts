import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrengthPage } from './strength.page';

const routes: Routes = [
  {
    path: '',
    component: StrengthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrengthPageRoutingModule {}
