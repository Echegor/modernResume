import {Component, OnInit, ViewChild} from '@angular/core';
import {NguCarousel, NguCarouselConfig, NguCarouselStore} from '@ngu/carousel';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private carouselToken: string;

  public carouselTileItems: Array<any>;
  public carouselTile: NguCarouselConfig;
  @ViewChild('carousel') carousel: NguCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
  }

  resetFn() {
    this.carousel.reset(this.carouselToken);
  }

  moveToSlide() {
    this.carousel.moveToSlide(this.carouselToken, 2, false);
  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

}
