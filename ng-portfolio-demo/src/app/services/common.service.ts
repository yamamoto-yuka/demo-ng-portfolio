import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomePage, Project, Projects } from '../interfaces/interface';
import { Skills } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
private url = environment.server;
  constructor(private http:HttpClient) { }

  getHomedata(){
    return this.http.get<HomePage>(this.url + '/api/homepage?populate=*');
  }

  postMessage(data:any){
    return this.http.post(this.url + '/api/contact-portfolios', data);
  }

  getSkills(){
    return this.http.get<Skills>(this.url + '/api/front-end-skills?populate=deep');
  }

  getProjects(){
    return this.http.get<Projects>(this.url + '/api/projects-portfolios?populate=deep');
  }

  getProjectByID(id:number){
    return this.http.get<{data:Project}>(this.url +'/api/projects-portfolios/'+ id +'?populate=deep');
  }
}
