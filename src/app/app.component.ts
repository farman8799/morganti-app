import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'About Us', url: '/about-us', icon: 'information-circle' },
    { title: 'Contact Us', url: '/contact-us', icon: 'call' },
  ];
  constructor() {}
}
