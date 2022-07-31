import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent} from './home/home.component';
import { DevelopmentComponent } from './project-details/development/development.component';
import { OtherComponent } from './project-details/other/other.component';
import { ConferenceposterComponent } from './conferenceposter/conferenceposter.component';
import { TrHomeComponent } from './trunkrecords/tr-home/tr-home.component';
import { TrApparelComponent } from './trunkrecords/tr-apparel/tr-apparel.component';
import { TrAppareldetailsComponent } from './trunkrecords/tr-appareldetails/tr-appareldetails.component';
import { TrSignupComponent } from './trunkrecords/admin/tr-signup/tr-signup.component';
import { TrLoginComponent } from './trunkrecords/admin/tr-login/tr-login.component';
import { TrManageProductsComponent } from './trunkrecords/admin/tr-manage-products/tr-manage-products.component';
import { TrUpdateComponent } from './trunkrecords/admin/tr-update/tr-update.component';
import { LoginGuard } from './trunkrecords/auth/login.guard';
import { CasestudyComponent } from './project-details/casestudy/casestudy.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'about', component:AboutComponent},
  {path:'projects/development/:title/:id', component:DevelopmentComponent},
  {path:'projects/casestudy/:title/:id', component:CasestudyComponent},
  {path:'projects/other/:title/:id', component:OtherComponent},
  {path:'contact', component:ContactComponent},
  // For conference poster site
  {path:'conferenceposter', component:ConferenceposterComponent},
  // For trunk Records demo site
  {path:'trunkrecords', component:TrHomeComponent},
  {path:'trunkrecords/home', component:TrHomeComponent},
  {path:'trunkrecords/apparel', component:TrApparelComponent},
  {path:'trunkrecords/apparel/:id', component:TrAppareldetailsComponent},
  {path:'trunkrecords/admin/register', component:TrSignupComponent},
  {path:'trunkrecords/admin/login', component:TrLoginComponent},
  {path:'trunkrecords/admin/home', component:TrManageProductsComponent, canActivate:[LoginGuard]},
  {path:'trunkrecords/admin/update/:id', component:TrUpdateComponent, canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
