import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';

export class Report {
  constructor(
    public date: NgbDateStruct,
    public symptoms: string[],
    public comments: string
  ) {
  }

  static usingDefaults(): Report {
    const now = new Date();
    const today = new NgbDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
    return new Report(today, [], "");
  }
}
