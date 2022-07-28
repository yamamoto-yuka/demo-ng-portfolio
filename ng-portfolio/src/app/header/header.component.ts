import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap ,Power2} from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() projectsActive: boolean = false;
  @Input() aboutActive: boolean = false;
  @Input() contactActive: boolean = false;
  @Input() textWhite: boolean = false;

  ham:boolean = false;
  nav:boolean = false;

  constructor() {}

  hamburgerBtn(){
    this.ham = !this.ham;
    this.nav = !this.nav;
  }

  ngOnInit(): void {
  }
}
