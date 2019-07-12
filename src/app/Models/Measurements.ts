export class Measurements {

    public type: string[];
    
    constructor() {
        this.type = [];
        this.type.push("Cup");
        this.type.push("Tps");
        this.type.push("Tbs");
        this.type.push("Grams");
        this.type.push("Ounces");
        this.type.push("Lbs");
        this.type.push("Kgs");
        this.type.push("N/A");
    }

    public getMeasurements() : string[] {
        return this.type;
    }
    
}