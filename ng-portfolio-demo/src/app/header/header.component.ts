import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap ,Power2} from 'gsap';

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
  @Input() textWhite: boolean = false;

  @ViewChild('header', {static:true}) header:ElementRef<HTMLDivElement>;
  @ViewChild('logo', {static:true}) logo:ElementRef<HTMLDivElement>;
  @ViewChild('ul', {static:true}) ul:ElementRef<HTMLDivElement>;



  ngOnInit(): void {




    const ham = document.querySelector('.hamburger') as HTMLCanvasElement;
    const nav = document.querySelector('nav') as HTMLCanvasElement;

    ham.addEventListener('click', () => {
      ham.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
}
