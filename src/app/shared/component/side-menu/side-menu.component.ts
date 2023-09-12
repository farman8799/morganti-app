import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {
  public appPages = [
    { title: 'Home', url: '/'},
    { title: 'About Us', url: '/about-us', },
    { title: 'Women’s Fragrances', url: '/about-us'},
    { title: 'Men’s Fragrances', url: '/about-us' },
    { title: 'Candles', url: '/about-us' },
    { title: 'Contact Us', url: '/contact-us', icon: 'call' },
  ];
  constructor() { }

  ngOnInit() {}

}
