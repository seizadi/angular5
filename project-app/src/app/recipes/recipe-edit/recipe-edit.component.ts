import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {IngredientModel} from "../../models/ingredient.model";
import {RecipeModel} from "../../models/recipe.model";
import {IngredientsService} from "../../services/ingredients.service";
import {ShoppingListService} from "../../services/shopping-list.service";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  private recipe: RecipeModel;
  private ingredients: IngredientModel[] = [];
  @Output() newRecipe: boolean;

  constructor(private recipeService: RecipesService,
              private ingredientsService: IngredientsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = +params['id'];
      if (id)
        this.getRecipe(id);
      else
        this.newRecipe = true;
    });
  }

  private getRecipe(id: number){
    this.recipe = this.recipeService.getRecipe(id);
    if (this.recipe) {
      this.ingredients = this.ingredientsService.getRecipeIngredients(this.recipe.ingredientRefs);
    }
  }

}
