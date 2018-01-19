import {RecipeModel} from "../models/recipe.model";

export class RecipesService {

  private recipes: RecipeModel[] = [
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

  constructor(){
  }

  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }
}
