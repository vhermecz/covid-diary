export class Report {
  constructor(
    public date: Date,
    public symptoms: string[]
  ) {
  }

  static usingDefaults(): Report {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return new Report(today, []);
  }
}
