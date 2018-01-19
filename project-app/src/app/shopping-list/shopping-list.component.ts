import {Component, OnInit} from '@angular/core';
import {RecipeModel} from "../models/recipe.model";
import {IngredientModel} from "../models/ingredient.model";
import {IngredientsService} from "../services/ingredients.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [];

  constructor(private ingredientsService: IngredientsService) {

  }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients();
  }

  onIngredientAdded(ingredient: IngredientModel){
//    this.ingredients.push(ingredient)
  }

}
