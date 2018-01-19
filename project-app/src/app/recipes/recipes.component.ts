import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../models/recipe.model";
import {RecipeActionsService} from "./recipeActions.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeActionsService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel;

  constructor(private recipeActionsService: RecipeActionsService) { }

  ngOnInit() {
    this.recipeActionsService.recipeSelected.subscribe((recipe: RecipeModel) => {
      console.log("receive recipeComp " + recipe);
      this.selectedRecipe = recipe;
    });
  }

}
