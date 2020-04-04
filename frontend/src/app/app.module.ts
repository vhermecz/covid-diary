import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendar, faThermometer } from '@fortawesome/free-solid-svg-icons';

const appRoutes: Routes = [
  {
    path: 'report',
    component: ReportFormComponent,
    data: { title: 'Report symptoms' }
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ReportFormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCalendar, faThermometer);
  }
}
