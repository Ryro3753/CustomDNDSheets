import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dndcustom';

  constructor(readonly service : CharacterService){

  }

  async ngOnInit(){
    let t =  await this.service.getCharacter();
    console.log(t);
  }

}
