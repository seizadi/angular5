import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../model/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

}
