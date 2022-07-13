import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() projectsActive: boolean = false;
  @Input() aboutActive: boolean = false;
  @Input() contactActive: boolean = false;

  nav() {}

  ngOnInit(): void {
    const ham = document.querySelector('.hamburger') as HTMLCanvasElement;
    const nav = document.querySelector('nav') as HTMLCanvasElement;

    ham.addEventListener('click', () => {
      ham.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
}
