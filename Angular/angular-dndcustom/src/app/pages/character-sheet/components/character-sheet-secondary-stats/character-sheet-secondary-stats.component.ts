import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CharacterSecondaryStats } from 'src/app/models/character/character-secondary-stats.model';
import { CharacterSecondaryStatsService } from 'src/app/services/character-services/character-secondary-stats.service';
import { CharacterSheetCalculator } from '../../character-sheet.calculator';

@Component({
  selector: 'app-character-sheet-secondary-stats',
  templateUrl: './character-sheet-secondary-stats.component.html',
  styleUrls: ['./character-sheet-secondary-stats.component.css']
})
export class CharacterSheetSecondaryStatsComponent implements OnInit {

  constructor(readonly service : CharacterSecondaryStatsService,
              readonly calculator : CharacterSheetCalculator) { }

  public characterRef : number = 4;
  cardDataSource : CharacterSecondaryStats;
  allStats : CharacterSecondaryStats[];
  cardModifierDataSource : CharacterSecondaryStats;
  async ngOnInit(): Promise<void> {
    this.allStats = await this.service.getCharactersSecondaryStats();
    this.characterFilter();
  }

  async characterFilter(){
    this.cardDataSource = this.allStats.filter(i => i.characterRef == this.characterRef)[0];
    this.cardModifierDataSource = await this.calculator.secondaryStatModifierCalculate(this.cardDataSource);
  }

}
