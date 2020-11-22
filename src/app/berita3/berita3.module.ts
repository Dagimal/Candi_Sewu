import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Berita3PageRoutingModule } from './berita3-routing.module';

import { Berita3Page } from './berita3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Berita3PageRoutingModule
  ],
  declarations: [Berita3Page]
})
export class Berita3PageModule {}
