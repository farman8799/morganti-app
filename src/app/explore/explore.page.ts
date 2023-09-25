import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  videoProperty= [
   {
    videoUrl: 'https://morganti.letshavewebsite.com/wp-content/uploads/2023/09/men-perfume.mp4'
   },
   {
    videoUrl: 'https://morganti.letshavewebsite.com/wp-content/uploads/2023/09/Women-Perfume.mp4'
   },
   {
    videoUrl: 'https://morganti.letshavewebsite.com/wp-content/uploads/2023/09/WhatsApp-Video-2023-09-11-at-7.15.20-PM.mp4'
   }
  ]

  constructor() { }

  ngOnInit() {
  }

}
