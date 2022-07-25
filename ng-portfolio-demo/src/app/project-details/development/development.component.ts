import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/interface';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'project-detail',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
})
export class DevelopmentComponent implements OnInit {
  project: Project;
  // For Image URL
  server = environment.server;

  constructor(
    private cs: CommonService,
    private param: ActivatedRoute
  ) {}


  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    // this.cs.getProjectByID(id).subscribe((res) => {
    //   this.project = res.data;
    //   console.log(this.project);
    // });
    let resData = this.getProjectID(id);
    console.log(resData);
    this.project = resData;
  }

  getProjectID(id: any) {
    let project = this.projects.filter((value) => value.id == id);
    return project[0];
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
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
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
                SkillName: 'Angular',
              },
            },
            {
              id: 2,
              attributes: {
                SkillName: 'Strapi',
              },
            },
            {
              id: 3,
              attributes: {
                SkillName: 'Illustrator',
              },
            },
            {
              id: 4,
              attributes: {
                SkillName: 'Figma',
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
              },
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
                            url: '../../assets/projects/miki_thumbnail.jpg',
                          },
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
                Title: '',
                Image: {
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
              },
            },
            {
              id: 2,
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
                            url: '../../assets/projects/miki_thumbnail.jpg',
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
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
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
                SkillName: 'HTML',
              },
            },
            {
              id: 2,
              attributes: {
                SkillName: 'SASS',
              },
            },
          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 1,
              attributes: {
                Role: 'Design',
              },
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
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
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
                SkillName: 'Figma',
              },
            },
          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 1,
              attributes: {
                Role: 'User Research',
              },
            },
            {
              id: 2,
              attributes: {
                Role: 'UI/UX Design',
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
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
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
                SkillName: 'Figma',
              },
            },
            {
              id: 1,
              attributes: {
                SkillName: 'Illustrator',
              },
            },
          ],
        },
        roles_portfolios: {
          data: [
            {
              id: 2,
              attributes: {
                Role: 'UI/UX Design',
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
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
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
                SkillName: 'Illustrator',
              },
            },
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
                    url: '../../assets/projects/siggraphposter_thumbnail.png',
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
