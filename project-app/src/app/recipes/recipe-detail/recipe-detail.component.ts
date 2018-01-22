import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";
import {IngredientModel} from "../../models/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingListModel} from "../../models/shopping-list.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe = new RecipeModel(null, null, null, []);
  @Input() ingredients: IngredientModel[] = [];

  constructor(private shoppingListService:ShoppingListService ) { }

  ngOnInit() {
  }

  onAddShoppingList() {
    let shoppingListItem = new ShoppingListModel(this.recipe.id, this.recipe.ingredientRefs);
    this.shoppingListService.addShoppingList(shoppingListItem);
  }

}
