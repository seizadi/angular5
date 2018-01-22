import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ErrorComponent} from "./error/error.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {path: 'recipes', component: RecipesComponent},
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
