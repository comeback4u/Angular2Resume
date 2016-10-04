/**
 * Created by smartSense on 03/10/16.
 */
import {Injectable} from "@angular/core";
import {Contactus} from "./contactus";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactusService {

  private aboutUrl = 'app/resumes';

  constructor(private http: Http) { }

  getContactUSS(): Promise<Contactus[]> {
    return this.http.get(this.aboutUrl)
      .toPromise()
      .then(response => response.json().data[0].contact as Contactus[])
      .catch(this.handleError);
  }

  getContactUS(id: number): Promise<Contactus> {
    console.log(this.getContactUSS()
      .then(Resumes => Resumes.find(Contactus => Contactus.id === id)));
    return this.getContactUSS()
      .then(Resumes => Resumes.find(Contactus => Contactus.id === id)).catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
