import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character/Character.model';

@Component({
  selector: 'app-character-sheet-details',
  templateUrl: './character-sheet-details.component.html',
  styleUrls: ['./character-sheet-details.component.css']
})
export class CharacterSheetDetailsComponent implements OnInit {
  colorClass: string;
  selectedCharacter : Character;
  hidden : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  @Input() set character(character: Character) {
    if (character.ref == 0) { return }
    this.colorClass = "color" + character.class.toLowerCase();
    this.selectedCharacter = character;
    if(this.hidden){this.hidden = false};
    
  }
  
}
