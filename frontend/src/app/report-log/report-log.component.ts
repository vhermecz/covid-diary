import { Component, OnInit } from '@angular/core';

import { Report, Feeling } from '../report';

@Component({
  selector: 'app-report-log',
  templateUrl: './report-log.component.html',
  styleUrls: ['./report-log.component.scss']
})
export class ReportLogComponent implements OnInit {

  reports: Report[] = [{
    date: { year: 2020, month: 4, day: 1 },
    feeling: Feeling.Great,
    symptoms: [],
    comments: "Ma elkezdtem írni a naplót! Egyelőre kutya bajom"
  }, {
    date: { year: 2020, month: 4, day: 2 },
    feeling: Feeling.Good,
    symptoms: ["dry-cough"],
    comments: "Hm, valami nincs teljesen rendben."
  }, {
    date: { year: 2020, month: 4, day: 3 },
    feeling: Feeling.Bad,
    symptoms: ["fatigue", "headache"],
    comments: "Eléggé rosszul éreztem ma magam, felkelni is nehéz volt."
  }, {
    date: { year: 2020, month: 4, day: 4 },
    feeling: null,
    symptoms: [],
    comments: "Ma voltam a téren, találkoztam Bélával. Szúr az oldalam."
  }, {
    date: { year: 2020, month: 4, day: 4 },
    feeling: Feeling.Bad,
    symptoms: ["fatigue", "headache", "dry-cough"],
    comments: ""
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
