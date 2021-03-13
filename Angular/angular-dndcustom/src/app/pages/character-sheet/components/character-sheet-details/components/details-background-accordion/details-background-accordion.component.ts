import { Component, Input, OnInit } from '@angular/core';
import { CharacterDescriptionDetails } from 'src/app/models/character/character-description-details.model';
import { Character } from 'src/app/models/Character/Character.model';
import { CharacterDescriptionDetailsService } from 'src/app/services/character-services/character-description-details.service';

@Component({
  selector: 'app-details-background-accordion',
  templateUrl: './details-background-accordion.component.html',
  styleUrls: ['./details-background-accordion.component.css']
})
export class DetailsBackgroundAccordionComponent implements OnInit {

  constructor(readonly service : CharacterDescriptionDetailsService) { }

  allDetails : CharacterDescriptionDetails[];
  characterDetail : CharacterDescriptionDetails;
  colorClass : string;

  async ngOnInit(): Promise<void> {
    this.allDetails = await this.service.getCharactersDescriptionDetails();
  }

  CharacterDetailFilter(characterRef : number){
    this.characterDetail = this.allDetails.filter(i => i.characterRef == characterRef)[0];
  }


  @Input() set character(character: Character) {
    if (character == undefined || character.ref == 0) { return }
    this.CharacterDetailFilter(character.ref);
    this.colorClass = "color"+character.class.toLowerCase();
  }

}
