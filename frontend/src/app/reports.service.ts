import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { Report } from './report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient,
    private dateFormat: NgbDateParserFormatter
  ) { }

  getReport(id: string) {
    return this.http.get("/api/reports/" + id)
      .pipe(
        map((data: any): Report => {
          data.date = this.dateFormat.parse(data.date);
          return new Report(
            this.dateFormat.parse(data.date),
            data.feeling,
            data.symptoms,
            data.comments
          );
        })
      );
  }

  postReport(report: Report) {
    var json: any = Object.assign({}, report);
    json.date = this.dateFormat.format(report.date);
    return this.http.post<Report>("/api/reports", json);
  }
}
