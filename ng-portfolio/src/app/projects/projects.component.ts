import { Component, OnInit, Renderer2 } from '@angular/core';
import { Project } from '../interfaces/interface';
import { CommonService } from '../services/common.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  // Change text css for active category
  activeAll: boolean = true;
  activeCaseStudy: boolean = false;
  activeDevelopment: boolean = false;
  activeOther: boolean = false;

  // Category Btn For Mobile
  mobileCategory: boolean = false;
  // Change Btn text
  showCategoryText: boolean = true;
  showCloseText: boolean = false;

  constructor(
    private cs: CommonService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  // Btn to show all data
  allBtn() {
    // 1.All Display properties in the json data are true
    this.projects.filter((value) => {
      value.attributes.Display = true;
    });
    // 2. Add active css of all Btn text
    this.activeAll = true;
    // 3. Remove active css of other Btn text
    this.activeDevelopment = this.activeCaseStudy = this.activeOther = false;
  }

  // Method for filtering each category data.
  // Get category values from Json data
  Filter(ClickedCategory: string) {
    this.projects.filter((value) => {
      // If this value equals the parameter, Then the display property in the json data is true.
      if (value.attributes.Category === ClickedCategory) {
        value.attributes.Display = true;
      } else {
        value.attributes.Display = false;
      }
    });
  }

  // Development
  developmentBtn() {
    // 1.Only developments display properties in the json data are true
    this.Filter('development');
    // 2. Add active css of development Btn text
    this.activeDevelopment = true;
    // 3. Remove active css of other Btn text
    this.activeAll = this.activeCaseStudy = this.activeOther = false;
  }

  // CaseStudy
  caseStudyBtn() {
    this.Filter('casestudy');
    this.activeCaseStudy = true;
    this.activeAll = this.activeDevelopment = this.activeOther = false;
  }

  // Others
  othersBtn() {
    this.Filter('other');
    this.activeOther = true;
    this.activeAll = this.activeDevelopment = this.activeCaseStudy = false;
  }

  // Category Btn For Mobile
  mobileCategoryBtn() {
    this.mobileCategory = !this.mobileCategory;
    this.showCategoryText = !this.showCategoryText;
    this.showCloseText = !this.showCloseText;
  }

  // Intersection Observer API
  onIntersection(event: any): void {
    console.log(event);
    if (event.visible) {
      this.renderer.addClass(event.target, 'scrollanime');
    } else {
      this.renderer.removeClass(event.target, 'scrollanime');
    }
  }

  ngOnInit(): void {
    // Scroll to Top
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.cs.getProjects().subscribe((res) => {
      console.log(res);
      this.projects = res.data;
      console.log(this.projects);
    });
  }

}
