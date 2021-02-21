import { Component } from '@angular/core';
import { Character } from './models/Character/character.model';
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
    let t : Character;
    t = {
      Ref : 0,
      CharacterName: 'modelDeneme',
      Class : 'Warrior',
      Race : 'Orc'
    };
    console.log(t);
    console.log(await this.service.InsertOrUpdateCharacter(t));
    console.log(await this.service.getCharacters());

}
}
