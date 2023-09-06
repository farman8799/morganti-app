import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/'},
    { title: 'About Us', url: '/about-us', },
    { title: 'Women’s Fragrances', url: '/about-us'},
    { title: 'Men’s Fragrances', url: '/about-us' },
    { title: 'Candles', url: '/about-us' },
    { title: 'Contact Us', url: '/contact-us', icon: 'call' },
  ];
  constructor() {}
}
