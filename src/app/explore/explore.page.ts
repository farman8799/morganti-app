import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  @ViewChild('videoFull') videoFull!: ElementRef;
  @ViewChild('videoMen') videoMen!: ElementRef;
  @ViewChild('videoWomen') videoWomen!: ElementRef;
  @ViewChild('videoCandles') videoCandles!: ElementRef;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.videoFull.nativeElement.muted = true;
    this.videoMen.nativeElement.muted = true;
    this.videoWomen.nativeElement.muted = true;
    this.videoCandles.nativeElement.muted = true;
    this.videoFull.nativeElement.autoplay = true;
    this.videoMen.nativeElement.autoplay = true;
    this.videoWomen.nativeElement.autoplay = true;
    this.videoCandles.nativeElement.autoplay = true;
  }

  ionViewWillLeave() {
    this.videoFull.nativeElement.pause = true;
    this.videoMen.nativeElement.pause = true;
    this.videoWomen.nativeElement.pause = true;
    this.videoCandles.nativeElement.pause = true;
}
}