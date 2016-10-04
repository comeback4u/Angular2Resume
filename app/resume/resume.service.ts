/**
 * Created by smartSense on 03/10/16.
 */
import {Injectable} from "@angular/core";
import {Resumes} from "./resume";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Skills} from "./skills";

@Injectable()
export class ResumeService {

  private aboutUrl = 'app/resumes';

  constructor(private http: Http) { }

  getResumesWorkEx(): Promise<Resumes[]> {
    return this.http.get(this.aboutUrl)
      .toPromise()
      .then(response => response.json().data[0].resume.workEx as Resumes[])
      .catch(this.handleError);
  }

  getResumesEdu(): Promise<Resumes[]> {
    return this.http.get(this.aboutUrl)
      .toPromise()
      .then(response => response.json().data[0].resume.eduction as Resumes[])
      .catch(this.handleError);
  }

  getResumesSkillSoft(): Promise<Skills[]> {
    return this.http.get(this.aboutUrl)
      .toPromise()
      .then(response => response.json().data[0].resume.Skills.software as Skills[])
      .catch(this.handleError);
  }

  getResumesSkillProg(): Promise<Skills[]> {
    return this.http.get(this.aboutUrl)
      .toPromise()
      .then(response => response.json().data[0].resume.Skills.programmingLanguage as Skills[])
      .catch(this.handleError);
  }

  getResume(id: number): Promise<Resumes> {
    console.log(this.getResumesWorkEx()
      .then(Resumes => Resumes.find(Resumes => Resumes.id === id)));
    return this.getResumesWorkEx()
      .then(Resumes => Resumes.find(Resumes => Resumes.id === id)).catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
