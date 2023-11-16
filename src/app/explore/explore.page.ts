import { Component, OnInit} from '@angular/core';
import { Videos } from './explore-data';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  videos = Videos;
  swiperModules = [IonicSlides];
  videoRef!: NodeListOf<HTMLVideoElement>;

  constructor() { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.setupVideos();
  }

  ionViewWillEnter(){
    this.videoRef = (document.querySelectorAll('video')) ;
    this.playVideo();
  }

  ionViewWillLeave() {
    this.pauseVideos();
  }
  
  private setupVideos(muted: boolean = true) {
    this.videoRef.forEach((video: HTMLVideoElement) => {
      video.muted = muted;
      video.currentTime = 0;
      video.loop = true;
    });
  }

  private pauseVideos() {
    this.videoRef.forEach((video: HTMLVideoElement) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  private playVideo(index: number = 0) {
    this.videoRef[index].play();
  }

  onSlideChange(ev: any) {
    const {realIndex} = ev.detail[0];
    
    this.pauseVideos();
    this.playVideo(realIndex);
  }
  
}