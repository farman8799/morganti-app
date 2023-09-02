import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },  {
    path: 'mens-fragrances',
    loadChildren: () => import('./mens-fragrances/mens-fragrances.module').then( m => m.MensFragrancesPageModule)
  },
  {
    path: 'womens-fragrances',
    loadChildren: () => import('./womens-fragrances/womens-fragrances.module').then( m => m.WomensFragrancesPageModule)
  },
  {
    path: 'candles',
    loadChildren: () => import('./candles/candles.module').then( m => m.CandlesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
