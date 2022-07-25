import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { Home2Component } from './home2/home2.component';
import { TopComponent } from './top/top.component';
import { DevelopmentComponent } from './project-details/development/development.component';
import { OtherComponent } from './project-details/other/other.component';

const routes: Routes = [
  {path:'', component:TopComponent},
  {path:'home', component:TopComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'about', component:AboutComponent},
  {path:'projects/development/:title/:id', component:DevelopmentComponent},
  {path:'projects/casestudy/:title/:id', component:DevelopmentComponent},
  {path:'other', component:OtherComponent},
  {path:'contact', component:ContactComponent},
  {path:'home1', component:Home2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
