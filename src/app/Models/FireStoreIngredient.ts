export class FireStoreIngredient {
  name: string;
  amount: string;
  measurement: string

  constructor(name: string, amount: string, measurement: string) {
    this.name = name;
    this.amount = amount;
    this.measurement = measurement;
  }
  
}
