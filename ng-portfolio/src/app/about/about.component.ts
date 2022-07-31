import { Component, OnInit, Renderer2 } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  proficiency = '';
  skills: any[] = [];

  progress: any;

  constructor(private renderer: Renderer2, private cs: CommonService, private router:Router) {}

  scrollAnimation(event: any) {
    if (event.visible) {
      this.renderer.setStyle(event.target, 'transform', 'translateX(0px)');
    }
  }

  onIntersection(event: any, percent: any) {
    console.log(event);
    if (event.visible) {
      console.log(percent);
      this.renderer.setStyle(event.target, 'width', percent + '%');
    }
  }

  ngOnInit(): void {
    // Scroll to Top 
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    })
      this.cs.getSkills().subscribe(res => {
        this.skills = res.data;
        console.log(this.skills);
      });
  }
}
