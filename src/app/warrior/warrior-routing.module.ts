import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarriorPage } from './warrior.page';

const routes: Routes = [
  {
    path: '',
    component: WarriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarriorPageRoutingModule {}
