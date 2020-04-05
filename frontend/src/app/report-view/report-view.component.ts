import { Component, Input } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { Report } from '../report';
import { symptoms } from '../symptoms';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent {

  @Input() report: Report;

  readonly symptomMap = symptoms.reduce(function (map, symptom) {
    map[symptom.id] = symptom.title;
    return map;
  }, {});

  constructor(
    public readonly dateFormat: NgbDateParserFormatter
  ) { }

  symptomList(): string {
    return this.report.symptoms
      .map(symptom => this.symptomMap[symptom].toLowerCase())
      .join(", ");
  }
}
