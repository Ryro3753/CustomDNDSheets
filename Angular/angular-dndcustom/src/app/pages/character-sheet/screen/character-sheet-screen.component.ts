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

  constructor() { }

  selectedCharacter: Character;

  SecondaryStatComponentEnable: boolean = false;
  SavingThrowComponentEnable: boolean = false;
  SkillsComponentEnable: boolean = false;

  @ViewChild('characterSavingThrows') savingThrowComponent: CharacterSheetSavingThrowsComponent;

  async ngOnInit(): Promise<void> {
    this.activateTheComponent();
  }

  activateTheComponent() {
    this.SecondaryStatComponentEnable = true;
    this.SavingThrowComponentEnable = true;
    this.SkillsComponentEnable = true;
  }

  emittedCharacterClicked(e) {
    this.selectedCharacter = e;
  }



}
