export class Report {
  constructor(
    public temperature: number,
    public dryCough: boolean,
    public wetCough: boolean,
    public tiredness: boolean
  ) {
    this.temperature = temperature;
  }

  static usingDefaults(): Report {
    return new Report(36.0, false, false, false);
  }
}
