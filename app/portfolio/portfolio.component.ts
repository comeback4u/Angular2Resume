/**
 * Created by smartSense on 03/10/16.
 */
import {Component} from "@angular/core";
import {Portfolio} from "./portfolio";
import {PortfolioService} from "./portfolio.service";
@Component({
  selector:'portfolio',
  templateUrl:'app/portfolio/portfolio.component.html',
  styleUrls:['app/app.component.css','app/normalize.css','app/normalize.min.css']

})
export class PortfolioComponent{
// @Input()
  portfolio:Portfolio[];

  constructor(private portfolioService:PortfolioService){};
  ngOnInit():void{
    this.getPortfolio();
  }

  getPortfolio(): void {
    this.portfolioService.getPortfolios().then(
      portfolio => {
        this.portfolio = portfolio
      }
    );
  }
}
