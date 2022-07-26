import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InViewportModule } from 'ng-in-viewport';
import { RecaptchaModule } from "ng-recaptcha";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DevelopmentComponent } from './project-details/development/development.component';
import { ContactComponent } from './contact/contact.component';
import { Home2Component } from './home2/home2.component';
import { TopComponent } from './top/top.component';
import { OtherComponent } from './project-details/other/other.component';
import { ConferenceposterComponent } from './demosite/conferenceposter/conferenceposter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    DevelopmentComponent,
    ContactComponent,
    Home2Component,
    TopComponent,
    OtherComponent,
    ConferenceposterComponent,
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
