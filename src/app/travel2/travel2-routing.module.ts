import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Travel2Page } from './travel2.page';

const routes: Routes = [
  {
    path: '',
    component: Travel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Travel2PageRoutingModule {}
