import { Component } from '@angular/core';
import { Character } from './models/character.model';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dndcustom';
  Characters : Character[];
  constructor(readonly service : CharacterService){

  }

  async ngOnInit(){
    const _this = this;
    let t =  await (await this.service.getCharacter()).subscribe(i => {
      _this.Characters = i
    });
  }
  asd(){
    console.log(this.Characters);
  }
}
