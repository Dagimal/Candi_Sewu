import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangunanPage } from './bangunan.page';

const routes: Routes = [
  {
    path: '',
    component: BangunanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangunanPageRoutingModule {}
