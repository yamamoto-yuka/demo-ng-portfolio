import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-details/project-detail/project-detail.component';
import { ProjectCasestudyComponent } from './project-casestudy/project-casestudy.component';
import { Home2Component } from './home2/home2.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path:'', component:TopComponent},
  {path:'home', component:TopComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'about', component:AboutComponent},
  {path:'projects/development/:title/:id', component:ProjectDetailComponent},
  {path:'projects/casestudy/:title/:id', component:ProjectCasestudyComponent},
  {path:'projects/other/:title/:id', component:ProjectDetailComponent},
  {path:'contact', component:ContactComponent},
  {path:'home1', component:Home2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
