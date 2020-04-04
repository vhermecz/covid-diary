import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { Report } from '../report';
import { symptoms } from '../symptoms';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

  symptoms = symptoms;
  model = Report.usingDefaults();
  submitted = false;

  constructor(
    private calendar: NgbCalendar,
    private reportsService: ReportsService
  ) { }

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

  submit() {
    this.reportsService.postReport(this.model)
      .subscribe((report) => { }, (error) => {
        console.log("Error", error);
      })
  }

  ngOnInit(): void {
  }
}
