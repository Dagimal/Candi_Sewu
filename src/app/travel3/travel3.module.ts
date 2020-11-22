import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Travel3PageRoutingModule } from './travel3-routing.module';

import { Travel3Page } from './travel3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Travel3PageRoutingModule
  ],
  declarations: [Travel3Page]
})
export class Travel3PageModule {}
