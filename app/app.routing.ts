
/**
 * Created by smartSense on 03/10/16.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactusComponent} from "./contactus/contactus.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const appRoutes : Routes=[
  {
    path:'about',component:AboutComponent
  },{
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },{
    path:'resume',component:ResumeComponent
  },{
    path:'contactus',component:ContactusComponent
  },{
    path:'portfolio',component:PortfolioComponent
  }
];

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
