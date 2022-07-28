import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Project } from 'src/app/interfaces/interface';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  project: Project;

  // For Image URL
  server = environment.server;

  constructor(
    private cs: CommonService,
    private param: ActivatedRoute,
    private router: Router
  ) {}

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
      console.log(this.project);
    });
  }

  // project =  {
  //   id: 2,
  //   attributes: {
  //     Title: 'Typography Project',
  //     Slug: 'swissstyleposter',
  //     SiteURL: '#',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  //     Category: 'other',
  //     ClientName: 'Swiss Style Poster Website',
  //     StartDate: 'Mar/2022',
  //     EndDate: 'Mar/2022',
  //     Display: true,
  //     skills: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             SkillName: 'HTML',
  //           },
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             SkillName: 'SASS',
  //           },
  //         },
  //       ],
  //     },
  //     roles_portfolios: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             Role: 'Design',
  //           },
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             Role: 'Typography',
  //           },
  //         },
  //         {
  //           id: 3,
  //           attributes: {
  //             Role: 'Development',
  //           },
  //         },
  //       ],
  //     },
  //     Thumbnail: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             alternativeText: '',
  //             formats: {
  //               thumbnail: {
  //                 url: '../../assets/projects/swissstylewebsite_thumbnail.png',
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     project_images: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             Title: '',
  //             Image: {
  //               data: [
  //                 {
  //                   id: 1,
  //                   attributes: {
  //                     alternativeText: '',
  //                     formats: {
  //                       thumbnail: {
  //                         url: '../../assets/projects/conferenceposter.jpg',
  //                         width: 100,
  //                         height: 100,
  //                       },
  //                     },
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // }
}