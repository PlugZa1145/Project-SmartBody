import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YogaPage } from './yoga.page';

const routes: Routes = [
  {
    path: '',
    component: YogaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YogaPageRoutingModule {}
