import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent  implements OnInit {
  breadcrumbs: any[] = [
    {
      text: 'Shop',
      classes: '',
      icon: {
        enable: true,
        name: 'home-outline'
      }
    },
    {
      text: 'Luxury Perfumes women',
      classes: 'fw-light',
    },
    {
      text: `Cèdre d’Or by Morganti`,
      classes: 'fw-light'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
