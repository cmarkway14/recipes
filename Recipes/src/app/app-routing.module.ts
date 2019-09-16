import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';

const routes: Routes = [
  { path: 'Book', pathMatch: 'full', component: RecipesComponent },
  { path: 'book', pathMatch: 'full', component: RecipesComponent },
  { path: 'Home', pathMatch: 'full', component: AppComponent},
  { path: 'home', pathMatch: 'full', component: AppComponent},
  // { path: '', pathMatch: 'full', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
