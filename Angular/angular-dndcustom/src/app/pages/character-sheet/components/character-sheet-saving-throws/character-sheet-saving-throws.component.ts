import { Component, OnInit } from '@angular/core';
import { CharacterSavingThrows } from 'src/app/models/character/character-saving-throws.model';
import { CharacterSavingThrowsService } from 'src/app/services/character-services/character-saving-throws.service';

@Component({
  selector: 'app-character-sheet-saving-throws',
  templateUrl: './character-sheet-saving-throws.component.html',
  styleUrls: ['./character-sheet-saving-throws.component.css']
})
export class CharacterSheetSavingThrowsComponent implements OnInit {

  constructor(readonly service : CharacterSavingThrowsService) { }

  public characterRef : number = 4;
  cardDataSource : CharacterSavingThrows;
  allSavingThrows : CharacterSavingThrows[];

  async ngOnInit(): Promise<void> {
    this.allSavingThrows = await this.service.getCharactersSavingThrows();
    this.characterFilter();
  }

  async characterFilter(){
    this.cardDataSource = this.allSavingThrows.filter(i => i.characterRef == this.characterRef)[0];
  }
}
