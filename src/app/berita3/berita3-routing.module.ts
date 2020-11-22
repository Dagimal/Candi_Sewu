import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Berita3Page } from './berita3.page';

const routes: Routes = [
  {
    path: '',
    component: Berita3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Berita3PageRoutingModule {}
