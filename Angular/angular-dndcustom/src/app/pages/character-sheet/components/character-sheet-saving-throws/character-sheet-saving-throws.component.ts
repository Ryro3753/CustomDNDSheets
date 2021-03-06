import { Component, Input, OnInit } from '@angular/core';
import { CharacterSavingThrows, CharacterSavingThrowsProfiency } from 'src/app/models/character/character-saving-throws.model';
import { CharacterSavingThrowsService } from 'src/app/services/character-services/character-saving-throws.service';
import { CharacterSheetCalculator } from '../../character-sheet.calculator';

@Component({
  selector: 'app-character-sheet-saving-throws',
  templateUrl: './character-sheet-saving-throws.component.html',
  styleUrls: ['./character-sheet-saving-throws.component.css']
})
export class CharacterSheetSavingThrowsComponent implements OnInit {

  constructor(readonly service : CharacterSavingThrowsService
               ) { }


  characterRef : number = 4;
  cardDataSource : CharacterSavingThrows;
  @Input() characterProfiency : string;
  characterSavingThrowProfiency : CharacterSavingThrowsProfiency;
  allSavingThrows : CharacterSavingThrows[];

  async ngOnInit(): Promise<void> {
    this.allSavingThrows = await this.service.getCharactersSavingThrows();
    this.cardDataSource = await this.cardDataSourceFilter(this.allSavingThrows,this.characterRef);
    this.characterSavingThrowProfiency = await this.characterProfiencyFilter(this.characterProfiency);
  }

  async characterProfiencyFilter(characterProfiency : string) : Promise<CharacterSavingThrowsProfiency>{
    return  await CharacterSheetCalculator.savingThrowsProfiencyCalculate(characterProfiency);
  }

  async cardDataSourceFilter(allSavingThrows : CharacterSavingThrows[], characterRef : number): Promise<CharacterSavingThrows>{
    return  allSavingThrows.filter(i => i.characterRef == characterRef)[0];
  }


}
