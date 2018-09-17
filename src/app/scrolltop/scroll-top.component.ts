import {Component, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-scrolltop',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'] ,
  encapsulation: ViewEncapsulation.None
})
export class ScrollTopComponent implements OnInit {
  public shouldHide: boolean;

  constructor() {
  }

  ngOnInit() {
    this.shouldHide = true;
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.shouldHide = window.pageYOffset < 100;
  }

}
