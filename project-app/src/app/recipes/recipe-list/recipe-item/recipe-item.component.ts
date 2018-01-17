import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../../model/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  @Input() recipe: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.recipeSelected.emit();
  }

}
