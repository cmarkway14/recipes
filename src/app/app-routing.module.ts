import { AccountComponent } from './components/account/account.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component'
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Book', pathMatch: 'full', component: RecipesComponent },
  { path: 'book', pathMatch: 'full', component: RecipesComponent },
  { path: 'Home', pathMatch: 'full', component: AppComponent },
  { path: 'home', pathMatch: 'full', component: AppComponent },
  { path: 'Account', pathMatch: 'full', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'account', pathMatch: 'full', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'a1', pathMatch: 'full', component:AccountComponent },
  { path: 'Add', pathMatch: 'full', component: AddRecipeComponent },
  { path: 'Ops', loadChildren: () => import('./admin_module/admin.module').then(m => m.AdminModule)},
  { path: 'sps', loadChildren: () => import('./admin_module/admin.module').then(m => m.AdminModule)},
  { path: '', pathMatch: 'full', component: RecipesComponent }
  // { path: '', pathMatch: 'full', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
