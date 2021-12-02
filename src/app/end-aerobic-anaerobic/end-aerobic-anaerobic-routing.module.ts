import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndAerobicAnaerobicPage } from './end-aerobic-anaerobic.page';

const routes: Routes = [
  {
    path: '',
    component: EndAerobicAnaerobicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndAerobicAnaerobicPageRoutingModule {}
