import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BridgePage } from './bridge.page';

const routes: Routes = [
  {
    path: '',
    component: BridgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BridgePageRoutingModule {}
