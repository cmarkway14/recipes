import { Ingredient } from './../Models/Ingredient';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recipe } from '../Models/Recipe';
import { FireStoreIngredient } from '../Models/FireStoreIngredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeCollection: AngularFirestoreCollection<Recipe>;
  recipe$: Observable<Recipe[]>;

  constructor(private afs: AngularFirestore) {
    this.recipeCollection = this.afs.collection<Recipe>('recipes');
    this.recipe$ = this.recipeCollection.valueChanges();
  }

  public GetAllRecipes() {
    this.recipeCollection = this.afs.collection<Recipe>('recipes');
    return this.recipeCollection.valueChanges();
  }

  public mapRecipe(recipe: any): Recipe {
    let newRecipe = new Recipe();
    newRecipe.name = recipe.Name;
    newRecipe.cookTime = recipe.CookTime;
    newRecipe.directions = recipe.Directions;
    newRecipe.image = recipe.Image;
    newRecipe.ingredients = new Array<Ingredient>();
    newRecipe.ingredients = recipe.ingredients;
    return newRecipe;
  }

  public fireStoreGetBasedOnDocumentId() {
    let test = this.afs.doc(`recipes/hI7FPCz11wifuWKaDk8l`);
    let test2 = test.valueChanges();

    test2.subscribe(x => {
      console.log('x is: ', x);
    })
  }

  public fireStoreGetBasedOnFieldName() {
    let test = this.afs.collection<Recipe>('recipes', ref => ref.where('Name', '==', 'Mac and Cheese'));
    let test2 = test.valueChanges();
    test2.subscribe(x => {
      console.log('this is x: ', x);
    })
  }

  public AddRecipe(recipe: Recipe): void {

    let temp = [];
    recipe.ingredients.forEach(x => {
       temp.push(new FireStoreIngredient(x.name, x.amount));
    });

    const ingredients = temp.map((obj) => {return Object.assign({}, obj)});

    this.recipeCollection.doc(recipe.name).set({
      Name: recipe.name,
      CookTime: recipe.cookTime,
      Directions: recipe.directions,
      Servings: recipe.servings,
      ingredients: ingredients,
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
}