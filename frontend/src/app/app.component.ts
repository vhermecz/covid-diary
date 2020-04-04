import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-diary';

  links = [
    { title: 'Report', fragment: 'report' }
  ];

  constructor(public route: ActivatedRoute) { }
}
