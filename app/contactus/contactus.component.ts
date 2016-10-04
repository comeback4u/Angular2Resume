/**
 * Created by smartSense on 03/10/16.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Contactus} from "./contactus";
import {ContactusService} from "./contactus.service";
import {AboutService} from "../about/about.service";
import {About} from "../about/about";

@Component({
  selector:'contactus',
  templateUrl:'app/contactus/contactus.component.html',
  styleUrls:['app/app.component.css','app/normalize.css','app/normalize.min.css']

})
export class ContactusComponent implements  OnInit{
  // @Input()
  contactuss:Contactus;

  constructor(private contactusService:ContactusService){};
  ngOnInit():void{
    this.getContactUs();
  }

  getContactUs(): void {
    this.contactusService.getContactUS(1).then(
      contactus => {
        this.contactuss = contactus
      }
    );
  }
}
