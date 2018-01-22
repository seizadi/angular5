import { Component } from '@angular/core';
import {IngredientsService} from "./services/ingredients.service";
import {RecipesService} from "./services/recipes.service";
import {ShoppingListService} from "./services/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RecipesService, IngredientsService, ShoppingListService]
})
export class AppComponent { }
