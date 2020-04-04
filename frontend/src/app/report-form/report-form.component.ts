import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { Report } from '../report';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

  symptoms = [
    {
      id: "dry-cough", hu: "Száraz köhögés"
    },
    {
      id: "wet-cough", hu: "Produktív köhögés"
    },
    {
      id: "fatigue", hu: "Fáradékonyság"
    },
    {
      id: "dyspnoea", hu: "Nehéz légzés"
    },
    {
      id: "soar-throat", hu: "Torokfájás"
    },
  ];

  date: NgbDateStruct;
  model = Report.usingDefaults();
  submitted = false;

  constructor(private calendar: NgbCalendar) {
    this.date = new NgbDate(this.model.date.getFullYear(), this.model.date.getMonth() + 1, this.model.date.getDate())
  }

  dateSelected(date: NgbDate) {
    this.model.date = new Date(date.year, date.month - 1, date.day);
  }

  selectToday() {
    this.date = this.calendar.getToday();
  }

  ngOnInit(): void {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
