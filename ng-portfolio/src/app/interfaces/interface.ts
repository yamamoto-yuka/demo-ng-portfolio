export interface HomePage {
  data: {
    id: number;
    attributes: {
      name: string;
      jbt: string;
      Description: string;
      bannerimage: {
        data: {
          attributes: {
            formats: {
              thubanil: {
                width: number;
                height: number;
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface Project {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    SiteURL: string;
    Description: string;
    Category: string;
    ClientName: string;
    StartDate: string;
    EndDate: string;
    Display: boolean;
    GithubURL:string;
    skills: {
      data: [
        {
          id: number;
          attributes: {
            SkillName: string;
            SkillLogo: {
              data: [
                {
                  id: number;
                  attributes: {
                    alternativeText: string;
                    formats: {
                      medium: {
                        url: string;
                        width: number;
                        height: number;
                      };
                    };
                  };
                }
              ];
            };
          };
        }
      ];
    };
    roles_portfolios: {
      data: [
        {
          id: number;
          attributes: {
            Role: string;
          };
        }
      ];
    };
    Thumbnail: {
      data: [
        {
          id: number;
          attributes: {
            alternativeText: string;
            url: string;
          };
        }
      ];
    };
    project_images: {
      data: [
        {
          id: number;
          attributes: {
            Title: string;
            Image: {
              data: [
                {
                  id: number;
                  attributes: {
                    alternativeText: string;
                    url: string;
                    width: number;
                    height: number;
                  };
                }
              ];
            };
          };
        }
      ];
    };
  };
}

export interface Projects {
  data: Project[];
}

export interface Skill {
  id: number;
  attributes: {
    SkillName: string;
    SkillLevel: number;
    SkillIcon: {
      data: {
        id: number;
        attributes: {
          alternativeText: string;
          url: string;
        };
      };
    };
  };
}

export interface Skills {
  data: Skill[];
}
