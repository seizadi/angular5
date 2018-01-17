import {Component, OnInit} from '@angular/core';
import {RecipeModel} from "../model/recipe.model";
import {IngredientModel} from "../model/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel("Apples", "10"),
    new IngredientModel("Oranges","20"),
    new IngredientModel("Avocados","2"),
  ];

  constructor() {

  }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel){
    this.ingredients.push(ingredient)
  }

}
