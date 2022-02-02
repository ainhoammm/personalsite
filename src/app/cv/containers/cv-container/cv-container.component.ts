import { Component, OnInit } from '@angular/core';
// import * as EuropassParser from 'europass-parser';

import CVAinhoa from '../../../../assets/cv/ainhoaES.json';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.sass']
})
export class CvContainerComponent implements OnInit {

  sections: any;

  cv: any;

  constructor(
  ) {
    this.cv = CVAinhoa;

    this.sections = [
      {name: 'educationTrainings', items: this.cv.profile.educationTrainings},
      {name: 'workExperiences', items: this.cv.profile.workExperiences},
      {name: 'organisationalSkills', items: this.cv.profile.organisationalSkills}
    ];
  }

  ngOnInit() {
  }

  print(){
    window.print();
  }

}
