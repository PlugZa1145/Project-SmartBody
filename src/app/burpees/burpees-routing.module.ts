import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurpeesPage } from './burpees.page';

const routes: Routes = [
  {
    path: '',
    component: BurpeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurpeesPageRoutingModule {}
