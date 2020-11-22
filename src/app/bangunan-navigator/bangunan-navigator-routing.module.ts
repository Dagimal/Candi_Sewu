import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BangunanNavigatorPage } from './bangunan-navigator.page';

const routes: Routes = [
  {
    path: '',
    component: BangunanNavigatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BangunanNavigatorPageRoutingModule {}
