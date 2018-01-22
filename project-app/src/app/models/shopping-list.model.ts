export class ShoppingListModel {
  private static idGen: number = 0;
  id:number;

  constructor(public recipeRef:number, public ingredientRefs:number[]) {
    this.id = ShoppingListModel.idGen;
    ShoppingListModel.idGen++;
  }
}
