// Angular modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

// Font Awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Application components
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ReportLogComponent } from './report-log/report-log.component';
import { ReportViewComponent } from './report-view/report-view.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: 'report',
    component: ReportFormComponent,
    data: { title: 'Tünetek jelentése' }
  },
  {
    path: 'log',
    component: ReportLogComponent,
    data: { title: 'Napló' }
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
    ReportLogComponent,
    ReportViewComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      {
        // Debugging purposes only
        enableTracing: true
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
