/**
 * Created by smartSense on 03/10/16.
 */
import {Injectable} from "@angular/core";

import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Portfolio} from "./portfolio";

@Injectable()
export class PortfolioService {

  private aboutUrl = 'app/resumes';

  constructor(private http: Http) { }

  getPortfolios(): Promise<Portfolio[]> {
    return this.http.get(this.aboutUrl)
      .toPromise()
      .then(response => response.json().data[0].portfolio as Portfolio[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
