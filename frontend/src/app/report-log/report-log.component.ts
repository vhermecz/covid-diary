import { Component, OnInit } from '@angular/core';

import { Report } from '../report';

@Component({
  selector: 'app-report-log',
  templateUrl: './report-log.component.html',
  styleUrls: ['./report-log.component.scss']
})
export class ReportLogComponent implements OnInit {

  reports: Report[] = [{
    date: { year: 2020, month: 4, day: 5 },
    symptoms: [],
    comments: "Komment-only"
  }, {
    date: { year: 2020, month: 4, day: 5 },
    symptoms: ["dry-cough", "fatigue", "headache"],
    comments: ""
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
