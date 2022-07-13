import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('imgWrap', { read: ElementRef }) images: QueryList<ElementRef>;
  @ViewChildren('headline', {read:ElementRef}) headline: QueryList<ElementRef>;
  @ViewChild('main', {static:true}) main:ElementRef<HTMLDivElement>;

  // Category
  isSmCategoryActive: boolean = false;
  smBtnShow: boolean = true;
  smBtnClose: boolean = false;
  // ActiveCategory
  activeAll: boolean = true;
  activeCaseStudy: boolean = false;
  activeDevelopment: boolean = false;
  activeOther: boolean = false;

  projects: any[] = [
    {
      title: 'Development',
      category: 'development',
      roles: [
        { role: 'Branding' },
        { role: 'Design' },
        { role: 'Development' },
        { role: 'Management' },
      ],
      skills: [
        { skill: 'Angular' },
        { skill: 'Strapi' },
        { skill: 'Illustrator' },
        { skill: 'Figma' },
      ],
      img: '/assets/projects/miki.jpg',
      display: true,
      path:'/projects/miki'
    },
    {
      title: 'Casestudy',
      category: 'casestudy',
      roles: [
        { role: 'Branding' },
        { role: 'Design' },
        { role: 'Development' },
        { role: 'Management' },
      ],
      skills: [
        { skill: 'Angular' },
        { skill: 'Strapi' },
        { skill: 'Illustrator' },
        { skill: 'Figma' },
      ],
      img: '/assets/projects/miki.jpg',
      display: true,
    },
    {
      title: 'Other',
      category: 'other',
      roles: [
        { role: 'Branding' },
        { role: 'Design' },
        { role: 'Development' },
        { role: 'Management' },
      ],
      skills: [
        { skill: 'Angular' },
        { skill: 'Strapi' },
        { skill: 'Illustrator' },
        { skill: 'Figma' },
      ],
      img: '/assets/projects/miki.jpg',
      display: true,
      path:'/projects/miki'
    },
  ];


  constructor(private cs:CommonService) {}

  categoryBtn() {
    this.isSmCategoryActive = !this.isSmCategoryActive;
    this.smBtnShow = !this.smBtnShow;
    this.smBtnClose = !this.smBtnClose;
  }

  categoryFilter(filter: string) {
    this.projects.filter((value, index) => {
      if (value.category === filter) {
        value.display = true;
      } else {
        value.display = false;
      }
    });
  }

  allList() {
    this.projects.filter((value, index) => {
      value.display = true;
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
    this.categoryFilter('other');
    this.activeOther = true;
    this.activeAll = this.activeDevelopment = this.activeCaseStudy = false;
  }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    let setItemActive = (entries: any) => {
      console.log(entries);
      entries.forEach((entry: any) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    let options = {};

    // Intersection Observer
    let observer = new IntersectionObserver(setItemActive, options);
    console.log(this.images);
    
    this.images.forEach((item, index) => {
      console.log(item);
      observer.observe(item.nativeElement);
    });

    this.headline.forEach((item, index)=>{
      observer.observe(item.nativeElement);
    })
  
  }
}
