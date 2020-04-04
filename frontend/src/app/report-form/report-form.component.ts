import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { Report } from '../report';
import { symptoms } from '../symptoms';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

  symptoms = symptoms;
  model = Report.usingDefaults();
  submitted = false;

  constructor(private calendar: NgbCalendar) {
  }

  hasSymptom(symptom: string): boolean {
    return this.model.symptoms.includes(symptom);
  }

  toggleSymptom(symptom: string) {
    const index = this.model.symptoms.indexOf(symptom);
    if (index == -1) {
      this.model.symptoms.push(symptom);
    } else {
      this.model.symptoms.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
