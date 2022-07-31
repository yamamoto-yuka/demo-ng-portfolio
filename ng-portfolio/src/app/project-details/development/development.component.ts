import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Project } from 'src/app/interfaces/interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'project-detail',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
})
export class DevelopmentComponent implements OnInit {
  project: Project;

  constructor(
    private cs: CommonService,
    private param: ActivatedRoute,
    private renderer: Renderer2,
    private router: Router
  ) {}

  // Intersection Observer API
  onIntersection(event: any): void {
    if (event.visible) {
      this.renderer.addClass(event.target, 'scrollanime');
    } else {
      this.renderer.removeClass(event.target, 'scrollanime');
    }
  }

  backToTop(event:any){
      window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
      })
  }

  ngOnInit(): void {
    // Scroll to Top
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.getProjectByID(id).subscribe((res) => {
      this.project = res.data;
    });

    //For testing 
    // let resData = this.getProjectID(id);
    // console.log(resData);
    // this.project = resData;
  }

  // getProjectID(id: any) {
  //   let project = this.projects.filter((value) => value.id == id);
  //   return project[0];
  // }

}
