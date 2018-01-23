import {EventEmitter, Injectable, Output} from "@angular/core";
import {IngredientsService} from "./ingredients.service";
import {ShoppingListModel} from "../models/shopping-list.model";
import {IngredientModel} from "../models/ingredient.model";
import {RecipeModel} from "../models/recipe.model";

@Injectable()
export class ShoppingListService {
  @Output() shoppingListChange = new EventEmitter();
  private shoppingList: ShoppingListModel[] = [
    new ShoppingListModel(0, [0,1])
  ];

  constructor(private ingredientService: IngredientsService){
  }

  getShoppingList(){
    return this.shoppingList.slice();
  }

  getRecipe(id: number): ShoppingListModel{
    for (let shoppingListItem of this.shoppingList){
      if (shoppingListItem.id == id)
        return shoppingListItem;
    }
    return null;
  }

  getIngredients(): IngredientModel[] {
    let ingredients: IngredientModel[] = [];
    console.log(this.shoppingList);
    for(let shoppingListItem of this.shoppingList) {
      let items = this.ingredientService.getRecipeIngredients(shoppingListItem.ingredientRefs);
      ingredients.push(...items)
    }
    return ingredients;
  }

  addShoppingList(shoppingList: ShoppingListModel){
    this.shoppingList.push(shoppingList);
    this.shoppingListChange.emit();
  }

}
