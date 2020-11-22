import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Travel1PageRoutingModule } from './travel1-routing.module';

import { Travel1Page } from './travel1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Travel1PageRoutingModule
  ],
  declarations: [Travel1Page]
})
export class Travel1PageModule {}
