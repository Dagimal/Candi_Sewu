import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SejarahPageRoutingModule } from './sejarah-routing.module';

import { SejarahPage } from './sejarah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SejarahPageRoutingModule
  ],
  declarations: [SejarahPage]
})
export class SejarahPageModule {}
