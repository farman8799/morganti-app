import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    // component: MainLayoutComponent,
    // children: [
    //   {
    //     path: 'home',
    //     loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    //   },
    //   {
    //     path: 'about-us',
    //     component: AboutUsComponent,
    //   },
    //   {
    //     path: 'contact-us',
    //     component: ContactUsComponent,
    //   },
    //   {
    //     path: 'term-condition',
    //     component: TermConditionComponent,
    //   },
    //   {
    //     path: 'privacy-policy',
    //     component: PrivacyPolicyComponent,
    //   },
    //   {
    //     path: 'delivery-return',
    //     component: DeliveryReturnComponent,
    //   },
    //   {
    //     path: 'address',
    //     component: AddressComponent,
    //   }
    // ]
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
