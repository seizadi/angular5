import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuSelected = new EventEmitter<{menu: string}>();
  constructor() { }

  ngOnInit() {
  }

  onMenu(event:string){
    if(event === 'recipe')
      this.menuSelected.emit({menu: 'recipe'});
    else
      this.menuSelected.emit({menu: 'shopping'});
  }

}
