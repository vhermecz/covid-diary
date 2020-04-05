export class Symptom {
  public readonly id: string;
  public readonly title: string;
}

export const symptoms: Symptom[] = [
  { id: "high-fever", title: "Láz" },
  { id: "low-fever", title: "Hőemelkedés" },
  { id: "fatigue", title: "Levertség" },
  { id: "cold-shivers", title: "Hidegrázás" },
  { id: "dry-cough", title: "Száraz köhögés" },
  { id: "wet-cough", title: "Produktív köhögés" },
  { id: "sore-throat", title: "Torokfájás" },
  { id: "runny-nose", title: "Orrfolyás" },
  { id: "dyspnoea", title: "Nehézlégzés" },
  { id: "headache", title: "Fejfájás" },
  { id: "joint-pains", title: "Izületi és végtagfájdalmak" },
  { id: "diarrhea", title: "Hasmenés, hasi panaszok" },
  { id: "lack-of-smell", title: "Csökkent szaglás, ízlelés" },
];
