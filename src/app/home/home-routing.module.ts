import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart-summary',
    component: CartSummaryComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
