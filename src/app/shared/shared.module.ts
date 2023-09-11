import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CardProductComponent } from './component/card-product/card-product.component';
import { ProductComponent } from '../product/product.component';
import { SliderProductComponent } from './component/slider-product/slider-product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductComponent,
    CardProductComponent,
    SliderProductComponent
  ],
  exports: [
    HeaderComponent,
    ProductComponent,
    CardProductComponent,
    SliderProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
