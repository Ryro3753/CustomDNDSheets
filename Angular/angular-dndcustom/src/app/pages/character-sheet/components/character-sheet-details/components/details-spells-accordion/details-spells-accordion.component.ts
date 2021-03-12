import { Component, Input, OnInit } from '@angular/core';
import { CharacterSpells } from 'src/app/models/character/character-spells.model';
import { Character } from 'src/app/models/Character/Character.model';
import { Spell } from 'src/app/models/spell/spell.model';
import { CharacterSpellsService } from 'src/app/services/character-services/character-spells.service';
import { SpellService } from 'src/app/services/spell-services/spell.service';

@Component({
  selector: 'app-details-spells-accordion',
  templateUrl: './details-spells-accordion.component.html',
  styleUrls: ['./details-spells-accordion.component.css']
})
export class DetailsSpellsAccordionComponent implements OnInit {

  constructor(readonly service : CharacterSpellsService,
              readonly spellService : SpellService) {
    
   }
  allSpells : Spell[];
  allCharacterSpells : CharacterSpells[];
  characterSpells : CharacterSpells[];

  async ngOnInit(): Promise<void> {
    this.allSpells = await this.spellService.getSpells();
    this.allCharacterSpells = await this.service.getCharactersSpells();
  }

  @Input() set character(character: Character) {
    if (character == undefined || character.ref == 0) { return }
    this.characterSpellFilter(character.ref);
  }
  

  characterSpellFilter(characterRef : number){
    this.characterSpells = this.allCharacterSpells.filter(i => i.characterRef == characterRef);
  }

}
