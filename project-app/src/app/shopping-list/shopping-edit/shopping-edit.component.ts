import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../models/ingredient.model";
import {IngredientsService} from "../../services/ingredients.service";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingListModel} from "../../models/shopping-list.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  constructor(private ingredientsService: IngredientsService,
              private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(){

    console.log(this.nameInput.nativeElement.value);
    console.log(this.amountInput.nativeElement.value);
    let ingredient = new IngredientModel(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value);
    let shoppingListItem = new ShoppingListModel(null, [ingredient.id]);

    this.ingredientsService.addIngredient(ingredient);
    this.shoppingListService.addShoppingList(shoppingListItem);

  }

}
