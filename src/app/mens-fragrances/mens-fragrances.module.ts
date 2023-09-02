import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensFragrancesPageRoutingModule } from './mens-fragrances-routing.module';

import { MensFragrancesPage } from './mens-fragrances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensFragrancesPageRoutingModule
  ],
  declarations: [MensFragrancesPage]
})
export class MensFragrancesPageModule {}
