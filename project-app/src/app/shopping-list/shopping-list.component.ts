import {Component, OnInit} from '@angular/core';
import {IngredientModel} from "../models/ingredient.model";
import {IngredientsService} from "../services/ingredients.service";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [];

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.shoppingListChange.subscribe(() => {
      console.log("receive shoppingListChange");
      this.ingredients = this.shoppingListService.getIngredients();
    });
  }

}
