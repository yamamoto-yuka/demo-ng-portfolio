import { Component, OnInit,  Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  
  onIntersection({ target, visible }: { target: Element; visible: boolean }) {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }


  ngOnInit(): void {
  }

}
