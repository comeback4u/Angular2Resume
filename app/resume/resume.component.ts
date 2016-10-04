/**
 * Created by smartSense on 03/10/16.
 */
import {Component} from "@angular/core";
import {ResumeService} from "./resume.service";
import {Resumes} from "./resume";
import {Skills} from "./skills";

@Component({
  selector: 'resume',
  templateUrl: 'app/resume/resume.component.html',
  styleUrls: ['app/app.component.css', 'app/normalize.css', 'app/normalize.min.css']

})
export class ResumeComponent {
  // @Input()
  resumesWork: Resumes[];
  resumesEdu: Resumes[];

  resumesSoft: Skills[];
  resumesProg: Skills[];


  constructor(private resumeService: ResumeService) {
  };

  ngOnInit(): void {
    this.getResumesWork();
    this.getResumesEduction();
    this.getResumesSoft();
    this.getResumesProg();
  }

  getResumesWork(): void {
    this.resumeService.getResumesWorkEx().then(
      resumes => {
        this.resumesWork = resumes
      }
    );
  }

  getResumesEduction(): void {
    this.resumeService.getResumesEdu().then(
      resumes => {
        this.resumesEdu = resumes
      }
    );
  }

  getResumesProg(): void {
    this.resumeService.getResumesSkillProg().then(
      resumes => {
        this.resumesProg = resumes
      }
    );
  }

  getResumesSoft(): void {
    this.resumeService.getResumesSkillSoft().then(
      resumes => {
        this.resumesSoft = resumes
      }
    );
  }

}
