export interface HomePage{
  data:{
    id:number;
    attributes:{
      name:string;
      jbt:string;
      Description:string;
      bannerimage:{
          data:{
            attributes:{
              formats:{
                thubanil:{
                  width:number;
                  height:number;
                  url:string;
                }
              }
            }
          }
      }
    }
  }

}

export interface Skill{
  id:number;
  attributes:{
    SkillName:string;
    SkillLogo:{
      data:[
        {
          attributes:{
            url:string;
          }
        }
      ]
    }
  }
}


export interface Skills{
  data:Skill[]
}

export interface Project{
  id:number;
  Slug:string;
  attributes:{
    Title:string;
    skills:Skills;
  }
}

export interface Projects{
  data:Project[];
}