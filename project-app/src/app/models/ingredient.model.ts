export class IngredientModel {
  private static idGen: number = 0;
  id:number;

  constructor(public name:string, public amount:string) {
    this.id = IngredientModel.idGen;
    IngredientModel.idGen++;
  }
}
