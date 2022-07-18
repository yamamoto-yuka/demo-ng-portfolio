import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { InViewportModule } from 'ng-in-viewport';
import { RecaptchaModule } from "ng-recaptcha";
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpaceComponent } from './space/space.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MikiComponent } from './project-details/miki/miki.component';
import { ProjectDetailComponent } from './project-details/project-detail/project-detail.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectCasestudyComponent } from './project-casestudy/project-casestudy.component';
import { Home2Component } from './home2/home2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpaceComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    MikiComponent,
    ProjectDetailComponent,
    SocialComponent,
    ContactComponent,
    SkillsComponent,
    ProjectCasestudyComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
