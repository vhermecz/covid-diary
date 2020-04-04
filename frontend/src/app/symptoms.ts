export class Symptom {
  public id: string;
  public hu: string;
}

export const symptoms: Symptom[] = [
  { id: "high-fever", hu: "Láz" },
  { id: "low-fever", hu: "Hőemelkedés" },
  { id: "fatigue", hu: "Levertség" },
  { id: "cold-shivers", hu: "Hidegrázás" },
  { id: "dry-cough", hu: "Száraz köhögés" },
  { id: "wet-cough", hu: "Produktív köhögés" },
  { id: "sore-throat", hu: "Torokfájás" },
  { id: "runny-nose", hu: "Orrfolyás" },
  { id: "dyspnoea", hu: "Nehézlégzés" },
  { id: "headache", hu: "Fejfájás" },
  { id: "joint-pains", hu: "Izületi és végtagfájdalmak" },
  { id: "diarrhea", hu: "Hasmenés, hasi panaszok" },
  { id: "lack-of-smell", hu: "Csökkent szaglás, ízlelés" },
];
