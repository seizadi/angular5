import {RecipeModel} from "../models/recipe.model";
import {EventEmitter, Output} from "@angular/core";

export class RecipeActionsService {
  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  constructor(){
  }

}
