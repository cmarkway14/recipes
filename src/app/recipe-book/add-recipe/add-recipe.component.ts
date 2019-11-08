import { Measurements } from './../../Models/Measurements';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/Recipe';
import { Ingredient } from 'src/app/Models/Ingredient';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipeNameForm: FormGroup;

  directionsArr: number[];
  directionsCounter: number = 1;
  ingredCounter: number = 0;
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
    this.directionsArr = [1];
    this.ingredientArr = [0];

    
  }

  public AddDirectionStep() : void {
    this.directionsCounter++;
    this.directionsArr.push(this.directionsCounter);
  }

  public RemoveDirectionStep() : void{
    this.directionsCounter--;
    this.directionsArr.pop();
  }
  public AddIngredient() : void {
    this.ingredCounter++;
    this.ingredientArr.push(this.ingredCounter);
    this.recipe.ingredients.push(new Ingredient());
  }

  public RemoveIngredient(index : number) : void {
    this.ingredientArr.pop();
    this.recipe.ingredients.splice(index, 1);
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    // this.recipe.ingredients.forEach(x => {
    //   x.amount += ' ';
    //   x.amount += x.measurement;
    // });
    this.recipeService.AddRecipe(this.recipe);
  }
}
