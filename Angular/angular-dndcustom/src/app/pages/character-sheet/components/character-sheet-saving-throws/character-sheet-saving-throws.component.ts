import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterSavingThrows, CharacterSavingThrowsProfiency } from 'src/app/models/character/character-saving-throws.model';
import { Character } from 'src/app/models/Character/Character.model';
import { CharacterSavingThrowsService } from 'src/app/services/character-services/character-saving-throws.service';
import { CharacterSheetCalculator } from '../../character-sheet.calculator';

@Component({
  selector: 'app-character-sheet-saving-throws',
  templateUrl: './character-sheet-saving-throws.component.html',
  styleUrls: ['./character-sheet-saving-throws.component.css']
})
export class CharacterSheetSavingThrowsComponent implements OnInit {

  constructor(readonly service: CharacterSavingThrowsService) { }


  savingThrow: CharacterSavingThrows;
  level : number;
  @Input() characterProfiency: string;
  characterSavingThrowProfiency: CharacterSavingThrowsProfiency;
  allSavingThrows: CharacterSavingThrows[];
  colorClass : string = "";
  @Output() InformationClicked : EventEmitter<any> = new EventEmitter<any>();



  async ngOnInit(): Promise<void> {
    this.allSavingThrows = await this.service.getCharactersSavingThrows();
  }

  characterProfiencyFilter(characterProfiency: string): CharacterSavingThrowsProfiency {
    return CharacterSheetCalculator.savingThrowsProfiencyCalculate(characterProfiency);
  }

  cardDataSourceFilter(characterRef: number): CharacterSavingThrows {
    return this.allSavingThrows.filter(i => i.characterRef == characterRef)[0];
  }

  @Input() set character(character: Character) {
    if (character.ref == 0) { return }
    this.level = character.level;
    const savingThrow = this.cardDataSourceFilter(character.ref);
    this.characterSavingThrowProfiency = this.characterProfiencyFilter(character.profiencyValues);
    this.savingThrow = CharacterSheetCalculator.savingThrowProfiencyIncrease(this.characterSavingThrowProfiency,savingThrow,this.level);
    this.colorClass = "color"+character.class.toLowerCase();
  }

  InformationClick(e){
    console.log(e);
  }

}
