import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AerobicAnaerobicPage } from './aerobic-anaerobic.page';

const routes: Routes = [
  {
    path: '',
    component: AerobicAnaerobicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerobicAnaerobicPageRoutingModule {}
