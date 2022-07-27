import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  onIntersection(event: any): void {
    console.log(event);
    if (event.visible) {
      this.renderer.addClass(event.target, 'active');
    }else{
      this.renderer.removeClass(event.target, 'active');
    }
 
  }

  ngOnInit(): void {
  }

}
