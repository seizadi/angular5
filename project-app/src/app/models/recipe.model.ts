export class RecipeModel {
  private static idGen: number = 0;
  id:number;
  constructor(public name:string,
              public description:string,
              public imagePath: string,
              public ingredientRefs: number[]){
    this.id = RecipeModel.idGen;
    RecipeModel.idGen++;
  }
}
