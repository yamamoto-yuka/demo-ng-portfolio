import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../interfaces/interface';
import { CommonService } from '../services/common.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


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

  // For Image URL
  server = environment.server;

  constructor(private cs: CommonService) {
    // gsap.registerPlugin(ScrollToPlugin); 
  }

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
    this.Filter('others');
    this.activeOther = true;
    this.activeAll = this.activeDevelopment = this.activeCaseStudy = false;
  }

  // Category Btn For Mobile
  mobileCategoryBtn() {
    this.mobileCategory = !this.mobileCategory;
    this.showCategoryText = !this.showCategoryText;
    this.showCloseText = !this.showCloseText;
  }

  ngOnInit(): void {
    this.cs.getProjects().subscribe((res) => {
      this.projects = res.data;
      console.log(this.projects);
    });
  }

  // Dummy json Data
  // projects: any[] = [
  // {
  //   id: 1,
  //   attributes: {
  //     Title: 'Miki',
  //     Slug: 'miki',
  //     SiteURL: '#',
  //     Description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     Category: 'development',
  //     ClientName: 'Miki',
  //     StartDate: 'Mar/2022',
  //     EndDate: 'June/2022',
  //     Display: true,
  //     skills: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             SkillName: 'Angular'
  //           },
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             SkillName: 'Strapi'
  //           },
  //         },
  //         {
  //           id: 3,
  //           attributes: {
  //             SkillName: 'Illustrator'
  //           },
  //         },
  //         {
  //           id: 4,
  //           attributes: {
  //             SkillName: 'Figma'
  //           },
  //         },
  //       ],
  //     },
  //     roles_portfolios: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             Role: 'Branding',
  //           }
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             Role: 'Design',
  //           },
  //         },
  //         {
  //           id: 3,
  //           attributes: {
  //             Role: 'Development',
  //           },
  //         },
  //         {
  //           id: 4,
  //           attributes: {
  //             Role: 'Management',
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
  //                 url: '../../assets/projects/miki_thumbnail.jpg',
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
  //                         url: '',
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
  // },
  // {
  //   id: 2,
  //   attributes: {
  //     Title: 'Typography Project',
  //     Slug: 'swissstyleposter',
  //     SiteURL: '#',
  //     Description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     Category: 'development',
  //     ClientName: 'Swiss Style Poster Website',
  //     StartDate: 'Mar/2022',
  //     EndDate: 'Mar/2022',
  //     Display: true,
  //     skills: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             SkillName: 'HTML'
  //           },
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             SkillName: 'SASS'
  //           },
  //         }
  //       ],
  //     },
  //     roles_portfolios: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             Role: 'Design',
  //           }
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
  //         }
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
  //                         url: '',
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
  // },
  // {
  //   id: 3,
  //   attributes: {
  //     Title: 'Freelance Payment System App',
  //     Slug: 'freelanceapp',
  //     SiteURL: '#',
  //     Description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     Category: 'casestudy',
  //     ClientName: 'Freelance Payment System App',
  //     StartDate: 'Mar/2022',
  //     EndDate: 'June/2022',
  //     Display: true,
  //     skills: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             SkillName: 'Figma'
  //           },
  //         }
  //       ],
  //     },
  //     roles_portfolios: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             Role: 'User Research',
  //           }
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             Role: 'UI/UX Design',
  //           },
  //         }
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
  //                 url: '../../assets/projects/Freelanceapp_thubmnail.jpg',
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
  //                         url: '',
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
  // },
  // {
  //   id: 4,
  //   attributes: {
  //     Title: '',
  //     Slug: 'biogeek',
  //     SiteURL: '#',
  //     Description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     Category: 'casestudy',
  //     ClientName: 'BioGeek',
  //     StartDate: 'Mar/2022',
  //     EndDate: 'June/2022',
  //     Display: true,
  //     skills: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             SkillName: 'Figma'
  //           },
  //         },
  //         {
  //           id: 1,
  //           attributes: {
  //             SkillName: 'Illustrator'
  //           },
  //         }
  //       ],
  //     },
  //     roles_portfolios: {
  //       data: [
  //         {
  //           id: 2,
  //           attributes: {
  //             Role: 'UI/UX Design',
  //           },
  //         }
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
  //                 url: '../../assets/projects/biogeek_thubmnail.jpg',
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
  //                         url: '',
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
  // },
  // {
  //   id: 5,
  //   attributes: {
  //     Title: '',
  //     Slug: 'siggraphposter',
  //     SiteURL: '#',
  //     Description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     Category: 'others',
  //     ClientName: 'Conference Poster',
  //     StartDate: 'Apr/2022',
  //     EndDate: 'Apr/2022',
  //     Display: true,
  //     skills: {
  //       data: [
  //         {
  //           id: 1,
  //           attributes: {
  //             SkillName: 'Illustrator'
  //           },
  //         }
  //       ],
  //     },
  //     roles_portfolios: {
  //       data: [
  //         {
  //           id: 2,
  //           attributes: {
  //             Role: 'Design',
  //           },
  //         },
  //         {
  //           id: 2,
  //           attributes: {
  //             Role: 'Typography',
  //           },
  //         }
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
  //                 url: '../../assets/projects/siggrafiposter_thumbnail.png',
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
  //                         url: '',
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
  // },
  // ];
}
