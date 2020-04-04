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
    { id: "high-fever", hu: "Láz" },
    { id: "low-fever", hu: "Hőemelkedés" },
    { id: "fatigue", hu: "Levertség" },
    { id: "cold-shivers", hu: "Hidegrázás" },
    { id: "dry-cough", hu: "Száraz köhögés" },
    { id: "wet-cough", hu: "Produktív köhögés" },
    { id: "sore-throat", hu: "Torokfájás" },
    { id: "runny-nose", hu: "Orrfolyás" },
    { id: "dyspnoea", hu: "Nehézlégzés" },
    { id: "headache", hu: "Fejfájás" },
    { id: "joint-pains", hu: "Izületi és végtagfájdalmak" },
    { id: "diarrhea", hu: "Hasmenés, hasi panaszok" },
    { id: "lack-of-smell", hu: "Csökkent szaglás, ízlelés" },
  ]

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
