import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighkicksPage } from './highkicks.page';

const routes: Routes = [
  {
    path: '',
    component: HighkicksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HighkicksPageRoutingModule {}
