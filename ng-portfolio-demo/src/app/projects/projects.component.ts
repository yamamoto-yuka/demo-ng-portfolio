import {
  Component,
  OnInit,
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
export class ProjectsComponent implements OnInit {
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
    // this.cs.getProjects().subscribe((res) => {
    //   this.projects = res.data;
    //   console.log(this.projects);
    // });
  }

   
  // Dummy Json Data
  projects: any[] = [
    {
      id: 1,
      attributes: {
        Title: 'Miki',
        Slug: 'miki',
        SiteURL: '#',
        Description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Category: 'development',
        ClientName: 'Miki',
        StartDate: 'Mar/2022',
        EndDate: 'June/2022',
        Display: true,
        skills: {
          data: [
            {
              id: 1,
              attributes: {
                SkillName: 'Angular'
              },
            },
            {
              id: 2,
              attributes: {
                SkillName: 'Strapi'
              },
            },
            {
              id: 3,
              attributes: {
                SkillName: 'Illustrator'
              },
            },
            {
              id: 4,
              attributes: {
                SkillName: 'Figma'
              },
            },
          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 1,
              attributes: {
                Role: 'Branding',
              }
            },
            {
              id: 2,
              attributes: {
                Role: 'Design',
              },
            },
            {
              id: 3,
              attributes: {
                Role: 'Development',
              },
            },
            {
              id: 4,
              attributes: {
                Role: 'Management',
              },
            },
          ],
        },
        Thumbnail: {
          data: [
            {
              id: 1,
              attributes: {
                alternativeText: '',
                formats: {
                  thumbnail: {
                    url: '../../assets/projects/miki_thumbnail.jpg',
                  },
                },
              },
            },
          ],
        },
        project_images: {
          data: [
            {
              id: 1,
              attributes: {
                Title: '',
                Image: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        alternativeText: '',
                        formats: {
                          thumbnail: {
                            url: '',
                            width: 100,
                            height: 100,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        Title: 'Typography Project',
        Slug: 'swissstyleposter',
        SiteURL: '#',
        Description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Category: 'development',
        ClientName: 'Swiss Style Poster Website',
        StartDate: 'Mar/2022',
        EndDate: 'Mar/2022',
        Display: true,
        skills: {
          data: [
            {
              id: 1,
              attributes: {
                SkillName: 'HTML'
              },
            },
            {
              id: 2,
              attributes: {
                SkillName: 'SASS'
              },
            }
          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 1,
              attributes: {
                Role: 'Design',
              }
            },
            {
              id: 2,
              attributes: {
                Role: 'Typography',
              },
            },
            {
              id: 3,
              attributes: {
                Role: 'Development',
              },
            }
          ],
        },
        Thumbnail: {
          data: [
            {
              id: 1,
              attributes: {
                alternativeText: '',
                formats: {
                  thumbnail: {
                    url: '../../assets/projects/swissstylewebsite_thumbnail.png',
                  },
                },
              },
            },
          ],
        },
        project_images: {
          data: [
            {
              id: 1,
              attributes: {
                Title: '',
                Image: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        alternativeText: '',
                        formats: {
                          thumbnail: {
                            url: '',
                            width: 100,
                            height: 100,
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
    {
      id: 3,
      attributes: {
        Title: 'Freelance Payment System App',
        Slug: 'freelanceapp',
        SiteURL: '#',
        Description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Category: 'casestudy',
        ClientName: 'Freelance Payment System App',
        StartDate: 'Mar/2022',
        EndDate: 'June/2022',
        Display: true,
        skills: {
          data: [
            {
              id: 1,
              attributes: {
                SkillName: 'Figma'
              },
            }
          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 1,
              attributes: {
                Role: 'User Research',
              }
            },
            {
              id: 2,
              attributes: {
                Role: 'UI/UX Design',
              },
            }
          ],
        },
        Thumbnail: {
          data: [
            {
              id: 1,
              attributes: {
                alternativeText: '',
                formats: {
                  thumbnail: {
                    url: '../../assets/projects/Freelanceapp_thubmnail.jpg',
                  },
                },
              },
            },
          ],
        },
        project_images: {
          data: [
            {
              id: 1,
              attributes: {
                Title: '',
                Image: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        alternativeText: '',
                        formats: {
                          thumbnail: {
                            url: '',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },

    {
      id: 4,
      attributes: {
        Title: '',
        Slug: 'biogeek',
        SiteURL: '#',
        Description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Category: 'casestudy',
        ClientName: 'BioGeek',
        StartDate: 'Mar/2022',
        EndDate: 'June/2022',
        Display: true,
        skills: {
          data: [
            {
              id: 1,
              attributes: {
                SkillName: 'Figma'
              },
            },
            {
              id: 1,
              attributes: {
                SkillName: 'Illustrator'
              },
            }

          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 2,
              attributes: {
                Role: 'UI/UX Design',
              },
            }
          ],
        },
        Thumbnail: {
          data: [
            {
              id: 1,
              attributes: {
                alternativeText: '',
                formats: {
                  thumbnail: {
                    url: '../../assets/projects/biogeek_thubmnail.jpg',
                  },
                },
              },
            },
          ],
        },
        project_images: {
          data: [
            {
              id: 1,
              attributes: {
                Title: '',
                Image: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        alternativeText: '',
                        formats: {
                          thumbnail: {
                            url: '',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
    {
      id: 5,
      attributes: {
        Title: '',
        Slug: 'siggraphposter',
        SiteURL: '#',
        Description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Category: 'others',
        ClientName: 'Conference Poster',
        StartDate: 'Apr/2022',
        EndDate: 'Apr/2022',
        Display: true,
        skills: {
          data: [
            {
              id: 1,
              attributes: {
                SkillName: 'Illustrator'
              },
            }
          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 2,
              attributes: {
                Role: 'Design',
              },
            },
            {
              id: 2,
              attributes: {
                Role: 'Typography',
              },
            }
          ],
        },
        Thumbnail: {
          data: [
            {
              id: 1,
              attributes: {
                alternativeText: '',
                formats: {
                  thumbnail: {
                    url: '../../assets/projects/siggrafiposter_thumbnail.png',
                  },
                },
              },
            },
          ],
        },
        project_images: {
          data: [
            {
              id: 1,
              attributes: {
                Title: '',
                Image: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        alternativeText: '',
                        formats: {
                          thumbnail: {
                            url: '',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },


  ];
 }
