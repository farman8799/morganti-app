import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss'],
})
export class SliderProductComponent  implements OnInit {
  @Input('sliderProducts') products: any[] = [];

  swiperModules = [IonicSlides];
  
  constructor() { }

  ngOnInit() {}

}
