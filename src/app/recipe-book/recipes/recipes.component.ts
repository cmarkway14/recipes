import { AddRecipeComponent } from './../add-recipe/add-recipe.component';
import { Ingredient } from './../../Models/Ingredient';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private dialog : MatDialog) {
    this.recipes = new Array<Recipe>();
   }

  ngOnInit() {
    let recipeObservable$ = this.recipeService.GetAllRecipes();
    recipeObservable$.subscribe(recipes => {
      recipes.forEach(recipe => {
        this.recipes.push(this.recipeService.mapRecipe(recipe));
      });
    });
  }

  public AddRecipe(){
    const dialogRef = this.dialog.open(AddRecipeComponent, {
      width: '75%',
      height: '75%',
      data: {

      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
