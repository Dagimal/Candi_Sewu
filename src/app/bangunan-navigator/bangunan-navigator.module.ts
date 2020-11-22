import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BangunanNavigatorPageRoutingModule } from './bangunan-navigator-routing.module';

import { BangunanNavigatorPage } from './bangunan-navigator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BangunanNavigatorPageRoutingModule
  ],
  declarations: [BangunanNavigatorPage]
})
export class BangunanNavigatorPageModule {}
