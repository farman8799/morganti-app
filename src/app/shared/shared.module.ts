import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CardProductComponent } from './component/card-product/card-product.component';
import { ProductComponent } from '../product/product.component';
import { SliderProductComponent } from './component/slider-product/slider-product.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ProductComponent,
    CardProductComponent,
    SliderProductComponent,
  ],
  exports: [
    HeaderComponent,
    ProductComponent,
    CardProductComponent,
    SliderProductComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
