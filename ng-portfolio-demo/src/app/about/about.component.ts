import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  proficiency = '';
  skills: any[] = [
    // {
    //   skillname: 'HTML5',
    //   level: 90,
    //   icon:'../../assets/html-5.png'
    // },
    // {
    //   skillname: 'CSS3',
    //   level: 60,
    //   icon:'../../assets/html-5.png'
    // },
    // {
    //   skillname: 'JavaScript',
    //   level: 50,
    //   icon:'../../assets/html-5.png'
    // },
    // {
    //   skillname: 'Typescript',
    //   level: 30,
    //   icon:'../../assets/html-5.png'
    // },
    // {
    //   skillname: 'Angular',
    //   level: 30,
    //   icon:'../../assets/html-5.png'
    // }
  ];

  progress: any;

  constructor(private renderer: Renderer2, private cs:CommonService) {}

  public onIntersection(event: any, percent: any): void {
    console.log(event);
    if (event.visible) {
      console.log(percent);
      this.renderer.setStyle(event.target, 'width', percent + '%');
    }
  }

  ngOnInit(): void {
    this,this.cs.getSkills().subscribe(res =>{
      this.skills = res.data;
      console.log(this.skills);
    })
  }
}
