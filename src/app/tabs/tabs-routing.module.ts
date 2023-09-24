import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AboutUsComponent } from '../about-us/about-us.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('./../explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'men',
        loadChildren: () => import('./../mens-fragrances/mens-fragrances.module').then(m => m.MensFragrancesPageModule)
      },
      {
        path: 'women',
        loadChildren: () => import('./../womens-fragrances/womens-fragrances.module').then(m => m.WomensFragrancesPageModule)
      },
      {
        path: 'candle',
        loadChildren: () => import('./../candles/candles.module').then(m => m.CandlesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explore',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class TabsPageRoutingModule {}
