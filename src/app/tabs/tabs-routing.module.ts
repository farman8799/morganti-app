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
        path: 'my-account',
        loadChildren: () => import('./../my-account/my-account.module').then(m => m.MyAccountPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./../cart/cart.module').then( m => m.CartPageModule)
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
