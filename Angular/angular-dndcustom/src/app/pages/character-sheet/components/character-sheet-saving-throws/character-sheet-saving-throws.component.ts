import { Component, OnInit } from '@angular/core';
import { CharacterSavingThrows, CharacterSavingThrowsProfiency } from 'src/app/models/character/character-saving-throws.model';
import { CharacterSavingThrowsService } from 'src/app/services/character-services/character-saving-throws.service';
import { CharacterSheetCalculator } from '../../character-sheet.calculator';

@Component({
  selector: 'app-character-sheet-saving-throws',
  templateUrl: './character-sheet-saving-throws.component.html',
  styleUrls: ['./character-sheet-saving-throws.component.css']
})
export class CharacterSheetSavingThrowsComponent implements OnInit {

  constructor(readonly service : CharacterSavingThrowsService,
              readonly calculator : CharacterSheetCalculator) { }

  public characterRef : number = 4;
  cardDataSource : CharacterSavingThrows;
  characterProfiency : string;
  characterSavingThrowProfiency : CharacterSavingThrowsProfiency;
  allSavingThrows : CharacterSavingThrows[];

  async ngOnInit(): Promise<void> {
    this.allSavingThrows = await this.service.getCharactersSavingThrows();
    this.characterFilter();
  }

  async characterFilter(){
    this.cardDataSource = this.allSavingThrows.filter(i => i.characterRef == this.characterRef)[0];
    console.log(this.characterProfiency);
    this.characterSavingThrowProfiency = await this.calculator.savingThrowsProfiencyCalculate(this.characterProfiency);
  }
}
