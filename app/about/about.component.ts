/**
 * Created by smartSense on 03/10/16.
 */
import {Component, OnInit,Input} from "@angular/core";
import {AboutService} from "./about.service";
import {About} from "./about";

@Component({
  selector:'about',
  templateUrl:'app/about/about.component.html',
  styleUrls:['app/app.component.css','app/normalize.css','app/normalize.min.css']

})
export class AboutComponent implements OnInit{

  @Input()
  abouts:About;

  constructor(private aboutService:AboutService){};

  ngOnInit():void{
    this.getResumes();
  }

  getResumes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.aboutService.getResume(1).then(about => this.abouts = about);
  }
}
