import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeLayoutComponent,
    HomePage,
    ProductDetailComponent,
    CheckoutComponent,
    CheckoutComponent,
    CartSummaryComponent,
    CategoryFilterComponent
  ]
})
export class HomePageModule {}
