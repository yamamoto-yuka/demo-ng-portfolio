import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.scss'],
})
export class CasestudyComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  // Intersection Observer API
  onIntersection(event: any): void {
    if (event.visible) {
      this.renderer.addClass(event.target, 'scrollanime');
    }
  }

  backToTop(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  ngOnInit(): void {}
}
