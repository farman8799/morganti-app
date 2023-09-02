import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomensFragrancesPageRoutingModule } from './womens-fragrances-routing.module';

import { WomensFragrancesPage } from './womens-fragrances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomensFragrancesPageRoutingModule
  ],
  declarations: [WomensFragrancesPage]
})
export class WomensFragrancesPageModule {}
