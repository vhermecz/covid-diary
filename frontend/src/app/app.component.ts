import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarCollapsed = true;

  title = 'Covid Diary';

  links = [
    { title: 'Jelentés', fragment: 'report' },
    { title: 'Napló', fragment: 'log' },
  ];

  constructor(public route: ActivatedRoute) { }
}
