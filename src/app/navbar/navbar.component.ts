import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(90deg)', background: 'white', color: 'black', 'border-radius': '0' })),
      transition('rotated => default', animate('100ms ease-out')),
      transition('default => rotated', animate('100ms ease-in'))
    ])
  ],
})
export class NavBarComponent implements OnInit {
  state: string = 'default';

  constructor() {
  }
  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  ngOnInit() {

  }

}
