import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomensFragrancesPage } from './womens-fragrances.page';

const routes: Routes = [
  {
    path: '',
    component: WomensFragrancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomensFragrancesPageRoutingModule {}
