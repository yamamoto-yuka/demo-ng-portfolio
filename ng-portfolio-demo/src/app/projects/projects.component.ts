import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChild,
  ViewChildren,
  Renderer2,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../interfaces/interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  // @ViewChildren('imgWrap', { read: ElementRef }) images: QueryList<ElementRef>;
  // @ViewChildren('headline', { read: ElementRef }) headline: QueryList<ElementRef>;

  // Category
  isSmCategoryActive: boolean = false;
  smBtnShow: boolean = true;
  smBtnClose: boolean = false;
  // ActiveCategory
  activeAll: boolean = true;
  activeCaseStudy: boolean = false;
  activeDevelopment: boolean = false;
  activeOther: boolean = false;

  // For Image URL
  server = environment.server;

  projects: Project[] = [
    // {
    //   title: 'Development',
    //   category: 'development',
    //   roles: [
    //     { role: 'Branding' },
    //     { role: 'Design' },
    //     { role: 'Development' },
    //     { role: 'Management' },
    //   ],
    //   skills: [
    //     { skill: 'Angular' },
    //     { skill: 'Strapi' },
    //     { skill: 'Illustrator' },
    //     { skill: 'Figma' },
    //   ],
    //   img: '/assets/projects/miki.jpg',
    //   display: true,
    //   path:'/projects/miki'
    // },
    // {
    //   title: 'Casestudy',
    //   category: 'casestudy',
    //   roles: [
    //     { role: 'Branding' },
    //     { role: 'Design' },
    //     { role: 'Development' },
    //     { role: 'Management' },
    //   ],
    //   skills: [
    //     { skill: 'Angular' },
    //     { skill: 'Strapi' },
    //     { skill: 'Illustrator' },
    //     { skill: 'Figma' },
    //   ],
    //   img: '/assets/projects/miki.jpg',
    //   display: true,
    // },
    // {
    //   title: 'Other',
    //   category: 'other',
    //   roles: [
    //     { role: 'Branding' },
    //     { role: 'Design' },
    //     { role: 'Development' },
    //     { role: 'Management' },
    //   ],
    //   skills: [
    //     { skill: 'Angular' },
    //     { skill: 'Strapi' },
    //     { skill: 'Illustrator' },
    //     { skill: 'Figma' },
    //   ],
    //   img: '/assets/projects/miki.jpg',
    //   display: true,
    //   path:'/projects/miki'
    // },
  ];

  constructor(private cs: CommonService, private renderer: Renderer2) {}

  onIntersection({ target, visible }: { target: Element; visible: boolean }) {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }

  categoryBtn() {
    this.isSmCategoryActive = !this.isSmCategoryActive;
    this.smBtnShow = !this.smBtnShow;
    this.smBtnClose = !this.smBtnClose;
  }

  categoryFilter(filter: string) {
    this.projects.filter((value, index) => {
      if (value.attributes.Category === filter) {
        value.attributes.Display = true;
      } else {
        value.attributes.Display = false;
      }
    });
  }

  allList() {
    this.projects.filter((value, index) => {
      value.attributes.Display = true;
    });
    this.activeAll = true;
    this.activeDevelopment = this.activeCaseStudy = this.activeOther = false;
  }

  developmentList() {
    this.categoryFilter('development');
    this.activeDevelopment = true;
    this.activeAll = this.activeCaseStudy = this.activeOther = false;
  }

  caseStudyList() {
    this.categoryFilter('casestudy');
    this.activeCaseStudy = true;
    this.activeAll = this.activeDevelopment = this.activeOther = false;
  }

  othersList() {
    this.categoryFilter('others');
    this.activeOther = true;
    this.activeAll = this.activeDevelopment = this.activeCaseStudy = false;
  }

  
  ngOnInit(): void {
    this.cs.getProjects().subscribe((res) => {
      this.projects = res.data;
      console.log(this.projects);
    });
  }

  ngAfterViewInit(): void {

    // let setItemActive = (entries: any) => {
    //   console.log(entries);
    //   entries.forEach((entry: any) => {
    //     console.log(entry);
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('active');
    //     } else {
    //       entry.target.classList.remove('active');
    //     }
    //   });
    // };

    // let options = {};
    // console.log(this.images);
    // // Intersection Observer
    // let observer = new IntersectionObserver(setItemActive, options);
    // this.images.forEach((item, index) => {
    //   console.log(item.nativeElement);
    //   observer.observe(item.nativeElement);
    // });

    // this.headline.forEach((item, index)=>{
    //   console.log(item.nativeElement);
    //   observer.observe(item.nativeElement);
    // })
  }
}
