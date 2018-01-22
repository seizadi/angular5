import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../models/recipe.model";
import {RecipeActionsService} from "./recipeActions.service";
import {IngredientModel} from "../models/ingredient.model";
import {IngredientsService} from "../services/ingredients.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeActionsService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel;
  selectedIngredients: IngredientModel[];

  constructor(private recipeActionsService: RecipeActionsService,
              private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.recipeActionsService.recipeSelected.subscribe((recipe: RecipeModel) => {
      console.log("receive recipeComp " + recipe);
      this.selectedRecipe = recipe;
      this.selectedIngredients = this.ingredientsService.getRecipeIngredients(recipe.ingredientRefs);
    });
  }

}
