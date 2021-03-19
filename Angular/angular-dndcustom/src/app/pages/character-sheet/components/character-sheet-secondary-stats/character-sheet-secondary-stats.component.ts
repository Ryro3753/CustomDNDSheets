import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CharacterSecondaryStats, CharacterSecondaryStatsValues } from 'src/app/models/character/character-secondary-stats.model';
import { Character } from 'src/app/models/Character/Character.model';
import { CharacterSecondaryStatsService } from 'src/app/services/character-services/character-secondary-stats.service';
import { CharacterSheetCalculator } from '../../character-sheet.calculator';

@Component({
  selector: 'app-character-sheet-secondary-stats',
  templateUrl: './character-sheet-secondary-stats.component.html',
  styleUrls: ['./character-sheet-secondary-stats.component.css']
})
export class CharacterSheetSecondaryStatsComponent implements OnInit {

  constructor(readonly service : CharacterSecondaryStatsService
              ) { }

  cardDataSource : CharacterSecondaryStats;
  secondaryStat : CharacterSecondaryStatsValues;
  allStats : CharacterSecondaryStats[];
  cardModifierDataSource : CharacterSecondaryStats;
  colorClass : string = "";
  keys: string[];


  async ngOnInit(): Promise<void> {
    this.allStats = await this.service.getCharactersSecondaryStats();
  }

  characterDataSourceFilter(characterRef : number): CharacterSecondaryStats{
    return this.allStats.filter(i => i.characterRef == characterRef)[0];
  }

  useCamelCaseToSentence(name : string){
    return CharacterSheetCalculator.camelCaseToSentence(name);
  }

  characterModifierFilter(characterRef : number): CharacterSecondaryStats{
    return CharacterSheetCalculator.secondaryStatModifierCalculate(this.cardDataSource);
  }
  @Input() set character(character: Character) {
    if (character.ref == 0) { return }
    this.cardDataSource = this.characterDataSourceFilter(character.ref);
    this.cardModifierDataSource = this.characterModifierFilter(character.ref);
    this.colorClass = "color" + character.class.toLowerCase();
    this.secondaryStat = CharacterSheetCalculator.secondaryStatsValues(this.cardDataSource);
    this.keys = Object.keys(this.secondaryStat);
}
}
