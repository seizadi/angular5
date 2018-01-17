import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: string = 'recipe';

  onNavigate(event: {menu: string}) {
      this.menu = event.menu;
  }

}
