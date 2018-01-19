import { Component } from '@angular/core';
import {IngredientsService} from "./services/ingredients.service";
import {RecipesService} from "./services/recipes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RecipesService, IngredientsService]
})
export class AppComponent {
  menu: string = 'recipe';

  onNavigate(event: {menu: string}) {
      this.menu = event.menu;
  }

}
