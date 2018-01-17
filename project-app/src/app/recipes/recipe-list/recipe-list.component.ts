import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../model/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel("Test Recipe 1",
      "Description of recipe 1",
      "assets/images/reddark.jpg"),
    new RecipeModel("Test Recipe 2",
      "Description of recipe 2",
      "assets/images/reddark.jpg"),
    new RecipeModel("Test Recipe 3",
      "Description of recipe 3",
      "assets/images/reddark.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipeItem: RecipeModel){
    this.recipeSelected.emit(recipeItem);
  }

}
