import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {AboutComponent} from "./about/about.component";
import {routing} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";
import {ContactusComponent} from "./contactus/contactus.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ResumeComponent} from "./resume/resume.component";
import "./rxjs-extensions"

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {AboutService} from "./about/about.service";

import {ContactusService} from "./contactus/contactus.service";
import {InMemoryDataService} from "./in-memory-data.service";
import {ResumeService} from "./resume/resume.service";
import {PortfolioService} from "./portfolio/portfolio.service";

@NgModule({
  imports: [ BrowserModule,HttpModule,routing,InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent,AboutComponent,ContactusComponent,PortfolioComponent, ResumeComponent],
  providers:[{provide: APP_BASE_HREF, useValue : '/' },AboutService,ContactusService,ResumeService,PortfolioService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
