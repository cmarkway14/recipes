import { Ingredient } from './../Models/Ingredient';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recipe } from '../Models/Recipe';
import { FireStoreIngredient } from '../Models/FireStoreIngredient';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeCollection: AngularFirestoreCollection<Recipe>;
  recipe$: Observable<Recipe[]>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;
  imageRef: any;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
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
    newRecipe.rating = recipe.Rating;
    newRecipe.haveCooked = recipe.HaveCooked;
    return newRecipe;
  }

  public AddRecipe(recipe: Recipe): void {

    let temp = [];
    recipe.ingredients.forEach(x => {
      temp.push(new FireStoreIngredient(x.name, x.amount, x.measurement));
    });

    const ingredients = temp.map((obj) => { return Object.assign({}, obj) });

    this.recipeCollection.doc(recipe.name).set({
      Name: recipe.name,
      CookTime: recipe.cookTime,
      Directions: recipe.directions,
      Servings: recipe.servings,
      ingredients: ingredients,
      Image: this.downloadURL$
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  public async UploadImage(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(id);
    this.task = this.ref.put(event.target.files[0]);

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.downloadURL$ = url;
        });
      })
    ).subscribe();
  }

  // Documentation Code on how to call for certain things
  //
  private fireStoreGetBasedOnDocumentId() {
    let test = this.afs.doc(`recipes/hI7FPCz11wifuWKaDk8l`);
    let test2 = test.valueChanges();

    test2.subscribe(x => {
      console.log('x is: ', x);
    })
  }

  private fireStoreGetBasedOnFieldName() {
    let test = this.afs.collection<Recipe>('recipes', ref => ref.where('Name', '==', 'Mac and Cheese'));
    let test2 = test.valueChanges();
    test2.subscribe(x => {
      console.log('this is x: ', x);
    })
  }

}