import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Travel1Page } from './travel1.page';

const routes: Routes = [
  {
    path: '',
    component: Travel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Travel1PageRoutingModule {}
