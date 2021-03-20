import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel } from 'primeng/carousel';
import { CharacterApperance } from 'src/app/models/character/character-apperance.model';
import { Character, CharacterCard } from 'src/app/models/Character/Character.model';
import { CharacterApperanceService } from 'src/app/services/character-services/character-apperance.service';
import { CharacterService } from 'src/app/services/character-services/character.service';
import { CharacterBuilderService } from 'src/app/services/common-services/character-builder.service';
import { IconService } from 'src/app/services/common-services/icon.service';
import { CharacterSheetCalculator } from '../../character-sheet.calculator';

@Component({
  selector: 'app-character-sheet-selection',
  templateUrl: './character-sheet-selection.component.html',
  styleUrls: ['./character-sheet-selection.component.css']
})
export class CharacterSheetSelectionComponent implements OnInit {

  constructor(readonly service: CharacterService,
    readonly serviceApperance: CharacterApperanceService,
    readonly serviceBuilder: CharacterBuilderService,
    private router: Router
  ) { }

  characters: Character[];
  charactersApperances: CharacterApperance[];
  charactersCardData: CharacterCard[];
  selectedCharacter: Character;
  ImagePath : string;
  colorClass : string = "";
  
  @Output() CharacterClick : EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('CharacterCarousel') carousel: Carousel;

  async ngOnInit(): Promise<void> {
    this.characters = await this.service.getCharacters();
    this.charactersApperances = await this.serviceApperance.getCharactersApperance();
    this.charactersCardData = await CharacterSheetCalculator.readDataFromService(this.characters, this.charactersApperances);
    this.ImagePath = IconService.getImagesPath(3);
    this.selectedCharacter = { ref: 0 } as Character;
  }
  characterClick(clickedCharacter) {
    this.selectedCharacter = clickedCharacter;
    this.reOrderTheCards(clickedCharacter);
    this.CharacterClick.emit(clickedCharacter);
    this.carousel.step(0,0);
    this.colorClass = "color"+ clickedCharacter.class.toLowerCase();
  }
  builderClick(character){
    this.serviceBuilder.selectedCharacterRef = character.ref;
    this.router.navigateByUrl('/CharacterBuilder');
  }
  
  reOrderTheCards(clickedCharacter) {
    this.charactersCardData = this.charactersCardData.filter(i => i.ref != clickedCharacter.ref);
    this.charactersCardData.unshift(clickedCharacter);
  }
}
