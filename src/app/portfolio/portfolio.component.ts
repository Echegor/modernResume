import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import {Project} from "../data/project";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  name = 'Carousel';
  withAnim = true;
  resetAnim = true;
  @ViewChild('myCarousel') myCarousel: NguCarousel;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 4000},
    loop: true,
    touch: true,
    velocity: 0.2
  };
  carouselItems: Array<Project> = [
    {
      title: 'Mobile Override Manager',
      subtitle: 'Wakefern Food Corp.',
      content: 'Application allows for a front end manager, who holds an Android application, and cashiers, who ' +
        'are sitting at a terminal, to exchange messages, for managers to monitor cashiers, managers interact with the ' +
        'transaction itself, to perform manager, and perform overrides remotely. The mobile override manager project ' +
        'saves Wakefern around 40 labor hours per week per store.',
      images: ['../../assets/images/mom/mom_login.png','../../assets/images/mom/mom_main.png','../../assets/images/mom/mom_more.png'],
    },
    {
      title: 'Jade',
      subtitle: 'Wakefern Food Corp.',
      content: 'Web service integration into the Toshiba ACE point of sale system for a new high speed checkout ' +
        'scanner. Built unit tests as well as used Java Visual VM to prole performance in order to ensure each ' +
        'item being scannedtook no more than 50 ms to complete in the system.',
      images: ['../../assets/images/jade/jade.png','../../assets/images/jade/jade2.png'],
    },
    {
      title: 'Hour Tracker',
      subtitle: 'Personal',
      content: 'Native Android application built to track a person\'s daily activities as well as hours worked. ' +
        'Leveraged Android design guidelines in order to create a visually appealing and simple user interface.',
      images: ['../../assets/images/hourtracker/hourtrackermain.png'],
    },
    {
      title: 'Coupon Application:',
      subtitle: 'Personal',
      content: 'Built a personal application in order to make the coupon clipping process easier.',
      images: ['https://luis-echegorri.herokuapp.com/assets/images/coupon/image1.png','https://luis-echegorri.herokuapp.com/assets/images/coupon/image2.png'],
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
