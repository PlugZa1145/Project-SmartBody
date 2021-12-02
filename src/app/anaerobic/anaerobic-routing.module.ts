import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnaerobicPage } from './anaerobic.page';

const routes: Routes = [
  {
    path: '',
    component: AnaerobicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnaerobicPageRoutingModule {}
