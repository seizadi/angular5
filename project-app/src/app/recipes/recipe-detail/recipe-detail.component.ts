import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../model/recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe = new RecipeModel("Name","Description", "path");

  constructor() { }

  ngOnInit() {
  }

}
