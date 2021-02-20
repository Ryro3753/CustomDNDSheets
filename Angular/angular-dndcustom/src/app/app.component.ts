import { Component } from '@angular/core';
import { Character } from './models/character.model';
import { CharacterService } from './services/CharacterServices/Character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dndcustom';
  Characters : Character[];
  constructor(public service : CharacterService){

  }

  async ngOnInit(){
    console.log(await this.service.getCharacters());
}
}
