import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ErrorComponent} from "./error/error.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {NoRecipeComponent} from "./recipes/no-recipe/no-recipe.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {EditRecipeComponent} from "./recipes/edit-recipe/edit-recipe.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: NoRecipeComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: EditRecipeComponent},
    ]},
  {path: 'shopping', component: ShoppingListComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
