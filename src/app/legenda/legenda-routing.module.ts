import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegendaPage } from './legenda.page';

const routes: Routes = [
  {
    path: '',
    component: LegendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegendaPageRoutingModule {}
