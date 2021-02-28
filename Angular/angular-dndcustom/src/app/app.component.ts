import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: MenuItem[];
  title = 'angular-dndcustom';
  constructor(){

  }
  ngOnInit(){
    this.menuItems = [
      {label: 'Home' },
      {label: 'Spell Editor' , url:"/SpellEditor"},
      {label: 'Equipment Editor', url:"/EquipmentEditor"},
  ];
  }

  link(e){
    console.log(e);
  }
}

