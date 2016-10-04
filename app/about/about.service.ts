/**
 * Created by smartSense on 03/10/16.
 */
import {Injectable} from "@angular/core";
import {About} from "./about";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AboutService {

  private aboutUrl = 'app/resumes';

  constructor(private http: Http) { }

  getResumes(): Promise<About[]> {
    var abc = this.http.get(this.aboutUrl)
      .toPromise()
      .then(response => response.json().data[0].about as About[])
      .catch(this.handleError);
    // var abc1 = this.http.get(this.aboutUrl)
    //   .toPromise()
    //   .then(function(result){
    //
    //     console.log(result.json().data[0].about);
    //   });
      // .catch(this.handleError);

    return abc;
  }



  getResume(id: number): Promise<About> {
    // console.log(this.getResumes()
    //   .then(Resumes => Resumes.find(About => About.id === id)));
    return this.getResumes()
      .then(Resumes => Resumes.find(About => About.id === id)).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
