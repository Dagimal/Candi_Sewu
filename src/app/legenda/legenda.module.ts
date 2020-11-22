import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegendaPageRoutingModule } from './legenda-routing.module';

import { LegendaPage } from './legenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegendaPageRoutingModule
  ],
  declarations: [LegendaPage]
})
export class LegendaPageModule {}
