import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materials } from './angular.materials';
import { firestoreImports } from './firestore.imports';
import { AccountComponent } from './components/account/account.component';
import { RecipeDetialsComponent } from './components/recipe-detials/recipe-detials.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AccountComponent,
    RecipeDetialsComponent,
    AddRecipeComponent
  ],
  entryComponents: [RecipeDetialsComponent],
  imports: [
    ...firestoreImports,
    ...materials,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
