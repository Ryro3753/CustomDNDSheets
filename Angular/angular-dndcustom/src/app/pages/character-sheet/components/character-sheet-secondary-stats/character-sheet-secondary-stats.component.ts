import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CharacterSecondaryStats } from 'src/app/models/character/character-secondary-stats.model';
import { CharacterSecondaryStatsService } from 'src/app/services/character-services/character-secondary-stats.service';

@Component({
  selector: 'app-character-sheet-secondary-stats',
  templateUrl: './character-sheet-secondary-stats.component.html',
  styleUrls: ['./character-sheet-secondary-stats.component.css']
})
export class CharacterSheetSecondaryStatsComponent implements OnInit {

  constructor(readonly service : CharacterSecondaryStatsService) { }

  public characterRef : number = 4;
  cardDataSource : CharacterSecondaryStats;
  allStats : CharacterSecondaryStats[];
  async ngOnInit(): Promise<void> {
    this.allStats = await this.service.getCharactersSecondaryStats();
    this.characterFilter();
  }

  characterFilter(){
    this.cardDataSource = this.allStats.filter(i => i.characterRef == this.characterRef)[0];
  }

}
