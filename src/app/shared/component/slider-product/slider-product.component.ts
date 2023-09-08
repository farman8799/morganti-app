import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss'],
})
export class SliderProductComponent  implements OnInit {
  @Input('sliderProducts') sliderProducts: any;

  constructor() { }

  ngOnInit() {}

}
