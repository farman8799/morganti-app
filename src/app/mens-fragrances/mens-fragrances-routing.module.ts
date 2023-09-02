import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensFragrancesPage } from './mens-fragrances.page';

const routes: Routes = [
  {
    path: '',
    component: MensFragrancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensFragrancesPageRoutingModule {}
