import { Measurements } from './../../Models/Measurements';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/Recipe';
import { Ingredient } from 'src/app/Models/Ingredient';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  counterArr: number[];
  counter: number = 1;
  counter2: number = 0;
  ingredientArr: number[];
  measurements: string[];
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.measurements = new Measurements().getMeasurements();
    this.recipe = new Recipe();
    this.recipe.ingredients = Array<Ingredient>();
    this.recipe.ingredients.push(new Ingredient());
    
   }

  ngOnInit() {
    //this is a hack need to find a better way to do this
    this.counterArr = [1];
    this.ingredientArr = [0];

    
  }

  public AddDirectionStep() : void {
    this.counter++;
    this.counterArr.push(this.counter);
  }

  public AddIngredient() : void {
    this.counter2++;
    this.ingredientArr.push(this.counter2);
    this.recipe.ingredients.push(new Ingredient());
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    this.recipe.ingredients.forEach(x => {
      x.amount += ' ';
      x.amount += x.measurement;
    });

    this.recipeService.AddRecipe(this.recipe);
  }


}
