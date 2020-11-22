import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Travel3Page } from './travel3.page';

const routes: Routes = [
  {
    path: '',
    component: Travel3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Travel3PageRoutingModule {}
