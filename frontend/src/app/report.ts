export class Report {
  constructor(
    public date: Date,
    public temperature: number,
    public symptoms: string[]
  ) {
    this.temperature = temperature;
  }

  static usingDefaults(): Report {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return new Report(today, 36.0, []);
  }
}
