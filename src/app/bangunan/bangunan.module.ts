import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangunanPageRoutingModule } from './bangunan-routing.module';

import { BangunanPage } from './bangunan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangunanPageRoutingModule
  ],
  declarations: [BangunanPage]
})
export class BangunanPageModule {}
