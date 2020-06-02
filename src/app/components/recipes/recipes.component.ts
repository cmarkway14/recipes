import { AddRecipeComponent } from './../add-recipe/add-recipe.component';
import { RecipeDetialsComponent } from '../recipe-detials/recipe-detials.component';
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
      width: '100%',
      height: '100%',
      data: {

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.recipeService.GetAllRecipes().subscribe(recipes => {
        recipes.forEach(recipe => {
          this.recipes = [];
          this.recipes.push(this.recipeService.mapRecipe(recipe));
        })
      })
    });
  }

  public Upload(event){
    this.recipeService.UploadImage(event).then(
      
    );
  }

  public OpenDetials(recipe: Recipe) : void {
    const dialogRef = this.dialog.open(RecipeDetialsComponent, {
      width: '75%',
      height: '75%',
      data: recipe
    })
  }
}
