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
    { id: "fever", hu: "Láz / hőemelkedés" },
    { id: "fatigue", hu: "Levertség" },
    { id: "shivers", hu: "Hidegrázás" },
    { id: "dry-cough", hu: "Száraz köhögés" },
    { id: "wet-cough", hu: "Produktív köhögés" },
    { id: "sore-throat", hu: "Torokfájás" },
    { id: "runny-nose", hu: "Orrfolyás" },
    { id: "dyspnoea", hu: "Nehézlégzés" },
    { id: "headache", hu: "Fejfájás" },
    { id: "joint-pains", hu: "Izületi és végtagfájdalmak" },
    { id: "diarrhoea", hu: "Hasmenés, hasi panaszok" },
    { id: "lack-of-smell", hu: "Csökkent szaglás, ízlelés    " },
  ]

  date: NgbDateStruct;
  model = Report.usingDefaults();
  submitted = false;

  constructor(private calendar: NgbCalendar) {
    this.date = new NgbDate(this.model.date.getFullYear(), this.model.date.getMonth() + 1, this.model.date.getDate())
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
