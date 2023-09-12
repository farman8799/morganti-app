import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DeliveryReturnComponent } from './delivery-return/delivery-return.component';
import { AddressComponent } from './address/address.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'term-condition',
        component: TermConditionComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'delivery-return',
        component: DeliveryReturnComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      }
    ]
  },
  {
    path: 'womens-fragrances',
    loadChildren: () =>
      import('./womens-fragrances/womens-fragrances.module').then(
        (m) => m.WomensFragrancesPageModule
      ),
  },
  {
    path: 'mens-fragrances',
    loadChildren: () =>
      import('./mens-fragrances/mens-fragrances.module').then(
        (m) => m.MensFragrancesPageModule
      ),
  },
  {
    path: 'candles',
    loadChildren: () =>
      import('./candles/candles.module').then((m) => m.CandlesPageModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
