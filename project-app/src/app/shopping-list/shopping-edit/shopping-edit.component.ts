import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from "../../model/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }

  OnDestroy() {
    console.log('Destroy Called!')
  }
  onAddIngredient(){

    console.log(this.nameInput.nativeElement.value);
    console.log(this.amountInput.nativeElement.value);
    this.ingredientAdded.emit( new IngredientModel(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value));
  }

}
