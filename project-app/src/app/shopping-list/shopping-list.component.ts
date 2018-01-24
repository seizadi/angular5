import {Component, OnInit, OnDestroy} from '@angular/core';
import {IngredientModel} from "../models/ingredient.model";
import {IngredientsService} from "../services/ingredients.service";
import {ShoppingListService} from "../services/shopping-list.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private ingredients: IngredientModel[] = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscription = this.shoppingListService.shoppingListChange
      .subscribe(() => {
        this.ingredients = this.shoppingListService.getIngredients();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
