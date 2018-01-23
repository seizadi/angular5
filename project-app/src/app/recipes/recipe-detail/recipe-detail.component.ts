import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {RecipeModel} from "../../models/recipe.model";
import {IngredientModel} from "../../models/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingListModel} from "../../models/shopping-list.model";
import {RecipesService} from "../../services/recipes.service";
import {IngredientsService} from "../../services/ingredients.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  private recipe: RecipeModel;
  private ingredients: IngredientModel[] = [];

  constructor(private shoppingListService:ShoppingListService,
              private recipeService: RecipesService,
              private ingredientsService: IngredientsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getRecipe(id);
    this.route.params.subscribe((params: Params) => {
      let id = +params['id'];
      this.getRecipe(id);
    });
  }

  private getRecipe(id: number){
    this.recipe = this.recipeService.getRecipe(id);
    if (this.recipe) {
      this.ingredients = this.ingredientsService.getRecipeIngredients(this.recipe.ingredientRefs);
    }
  }

  onAddShoppingList() {
    let shoppingListItem = new ShoppingListModel(this.recipe.id, this.recipe.ingredientRefs);
    this.shoppingListService.addShoppingList(shoppingListItem);
  }

}
