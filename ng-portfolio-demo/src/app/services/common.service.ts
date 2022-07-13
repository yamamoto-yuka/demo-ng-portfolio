import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomePage, Project } from '../interfaces/interface';
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
    return this.http.post(this.url + '/api/leads', data);
  }

  getSkills(){
    return this.http.get<Skills>(this.url + '/api/skills?populate=*');
  }

  getProjects(){
    return this.http.get<Project>(this.url + '/api/projects-portfolios?populate=deep,3');
  }
}
