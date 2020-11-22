import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FasilitasPageRoutingModule } from './fasilitas-routing.module';

import { FasilitasPage } from './fasilitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FasilitasPageRoutingModule
  ],
  declarations: [FasilitasPage]
})
export class FasilitasPageModule {}
