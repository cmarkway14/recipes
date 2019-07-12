import { Ingredient } from './Ingredient';

export class Recipe{
    directions: Array<string>;
    name: string;
    cookTime: number;
    ingredients: Array<Ingredient>;
    image: string;
    servings: number;

    constructor() {
        this.name = '';        
        this.ingredients = [];
        this.directions = [];
    }
}
