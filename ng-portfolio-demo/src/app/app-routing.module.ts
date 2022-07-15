import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-details/project-detail/project-detail.component';
import { ProjectCasestudyComponent } from './project-casestudy/project-casestudy.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'project', component:ProjectsComponent},
  {path:'about-me', component:AboutComponent},
  {path:'project/development/:title/:id', component:ProjectDetailComponent},
  {path:'project/casestudy/:title/:id', component:ProjectCasestudyComponent},
  {path:'project/other/:title/:id', component:ProjectDetailComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
