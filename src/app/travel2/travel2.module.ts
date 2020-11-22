import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Travel2PageRoutingModule } from './travel2-routing.module';

import { Travel2Page } from './travel2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Travel2PageRoutingModule
  ],
  declarations: [Travel2Page]
})
export class Travel2PageModule {}
