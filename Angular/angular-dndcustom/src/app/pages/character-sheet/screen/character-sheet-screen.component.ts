import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterApperance } from 'src/app/models/character/character-apperance.model';
import { Character, CharacterCard } from 'src/app/models/Character/Character.model';
import { CharacterApperanceService } from 'src/app/services/character-services/character-apperance.service';
import { CharacterService } from 'src/app/services/character-services/character.service';
import { CharacterSheetCalculator } from '../character-sheet.calculator';
import { CharacterSheetSavingThrowsComponent } from '../components/character-sheet-saving-throws/character-sheet-saving-throws.component';

@Component({
  selector: 'app-character-sheet-screen',
  templateUrl: './character-sheet-screen.component.html',
  styleUrls: ['./character-sheet-screen.component.css']
})
export class CharacterSheetScreenComponent implements OnInit {

  constructor(readonly service : CharacterService,
              readonly serviceApperance : CharacterApperanceService,
              readonly calculator : CharacterSheetCalculator) { }

  characters : Character[];
  charactersApperances : CharacterApperance[];
  charactersCardData : CharacterCard[];
  character : Character;

  @ViewChild('characterSavingThrows') savingThrowComponent: CharacterSheetSavingThrowsComponent;

  async ngOnInit(): Promise<void> {
  this.characters = await this.service.getCharacters();
  this.charactersApperances = await this.serviceApperance.getCharactersApperance();
  this.charactersCardData =  await this.calculator.readDataFromService(this.characters, this.charactersApperances);
 
  console.log(this.charactersCardData);
  this.character = this.characters.filter(i => i.ref == 4)[0];
  //this.savingThrowComponent.characterProfiency = this.character.profiencyValues;
  }

  characterClick(clickedCharacter){
    console.log(clickedCharacter);
    this.reOrderTheCards(clickedCharacter);
  }

  reOrderTheCards(clickedCharacter){
    this.charactersCardData = this.charactersCardData.filter(i => i.ref != clickedCharacter.ref);
    this.charactersCardData.unshift(clickedCharacter);
  }

  

}
