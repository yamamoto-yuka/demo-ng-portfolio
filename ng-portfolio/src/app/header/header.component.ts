import { Component, Input, OnInit} from '@angular/core';

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
