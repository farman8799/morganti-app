import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  videoProperty= [
   {
    videoUrl: 'https://morganti.letshavewebsite.com/wp-content/uploads/2023/09/men-perfume.mp4',
    title: 'Men Fragrance'
   },
   {
    videoUrl: 'https://morganti.letshavewebsite.com/wp-content/uploads/2023/09/Women-Perfume.mp4',
    title: 'Women Fragrance'
   },
   {
    videoUrl: 'https://morganti.letshavewebsite.com/wp-content/uploads/2023/09/WhatsApp-Video-2023-09-11-at-7.15.20-PM.mp4',
    title: 'Candles'
   }
  ]

  constructor() { }

  ngOnInit() {}

  ionViewDidEnter() {
  this.setupVideos(true);
  }

  ionViewWillEnter(){
    this.playVideos();
        
  }

  ionViewWillLeave() {
    this.pauseVideos();
  }

  private setupVideos(muted: boolean) {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.muted = muted;
      video.currentTime = 0;
      video.loop = true;
    });
  }

  private pauseVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.pause();
    });
  }

  private playVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.play();
    });
  }
}