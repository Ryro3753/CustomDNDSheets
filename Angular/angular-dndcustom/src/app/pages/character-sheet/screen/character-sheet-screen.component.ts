import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from 'src/app/models/Character/Character.model';
import { CharacterSheetSavingThrowsComponent } from '../components/character-sheet-saving-throws/character-sheet-saving-throws.component';

@Component({
  selector: 'app-character-sheet-screen',
  templateUrl: './character-sheet-screen.component.html',
  styleUrls: ['./character-sheet-screen.component.css']
})
export class CharacterSheetScreenComponent implements OnInit {

  constructor() { }

  selectedCharacter: Character;

  SecondaryStatsComponentEnable: boolean = false;
  SavingThrowComponentEnable: boolean = false;
  SkillsComponentEnable: boolean = false;
  MainStatsComponentEnable: boolean = false;
  DetailsComponentEnable: boolean = false;


  async ngOnInit(): Promise<void> {
    this.selectedCharacter = { ref: 0 } as Character;
    this.activateTheComponent();

  }

  activateTheComponent() {
    this.SecondaryStatsComponentEnable = true;
    this.SavingThrowComponentEnable = true;
    this.SkillsComponentEnable = true;
    this.MainStatsComponentEnable = true;
    this.DetailsComponentEnable = true;
}

  emittedCharacterClicked(e) {
    this.selectedCharacter = e;
  }



}
