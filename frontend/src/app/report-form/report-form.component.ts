import { Component, OnInit } from '@angular/core';

import { Report } from '../report';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {

  model = Report.usingDefaults();
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
