import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../models/recipe.model";
import {RecipeActionsService} from "../../recipeActions.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor(private recipeActionsService: RecipeActionsService) { }

  ngOnInit() {
  }

  onSelect(){
    this.recipeActionsService.recipeSelected.emit(this.recipe);
    console.log(this.recipe);

  }

}
