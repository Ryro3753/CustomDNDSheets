import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CharacterApperanceService } from 'src/app/services/character-services/character-apperance.service';
import { CharacterDescriptionDetailsService } from 'src/app/services/character-services/character-description-details.service';
import { CharacterEquipmentService } from 'src/app/services/character-services/character-equipment.service';
import { CharacterMainStatsService } from 'src/app/services/character-services/character-main-stats.service';
import { CharacterMoneyService } from 'src/app/services/character-services/character-money.service';
import { CharacterSavingThrowsService } from 'src/app/services/character-services/character-saving-throws.service';
import { CharacterSecondaryStatsService } from 'src/app/services/character-services/character-secondary-stats.service';
import { CharacterSkillsService } from 'src/app/services/character-services/character-skills.service';
import { CharacterSpellsService } from 'src/app/services/character-services/character-spells.service';
import { CharacterService } from 'src/app/services/character-services/character.service';
import { EquipmentService } from 'src/app/services/equipment-services/equipment.service';
import { SpellService } from 'src/app/services/spell-services/spell.service';

@Component({
  selector: 'app-equipment-screen',
  templateUrl: './equipment-screen.component.html',
  styleUrls: ['./equipment-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentScreenComponent implements OnInit {

  constructor(
    readonly characterService: CharacterService,
    readonly characterApperanceService: CharacterApperanceService,
    readonly characterDescriptionDetailsService: CharacterDescriptionDetailsService,
    readonly characterEquipmentService: CharacterEquipmentService,
    readonly characterMainStatsService: CharacterMainStatsService,
    readonly characterMoneyService: CharacterMoneyService,
    readonly characterSavingThrowsService: CharacterSavingThrowsService,
    readonly characterSecondaryStatsService: CharacterSecondaryStatsService,
    readonly characterSkillsService: CharacterSkillsService,
    readonly characterSpellsService: CharacterSpellsService,
    readonly spellService: SpellService,
    readonly equipmentService: EquipmentService,
  ) {

  }

  async ngOnInit() {
    console.log(await this.characterService.getCharacters());
    console.log(await this.characterApperanceService.getCharactersApperance());
    console.log(await this.characterDescriptionDetailsService.getCharactersDescriptionDetails());
    console.log(await this.characterEquipmentService.getEveryCharacterEquipment());
    console.log(await this.characterMainStatsService.getCharactersMainStats());
    console.log(await this.characterMoneyService.getCharactersMoney());
    console.log(await this.characterSavingThrowsService.getCharactersSavingThrows());
    console.log(await this.characterSecondaryStatsService.getCharactersSecondaryStats());
    console.log(await this.characterSkillsService.getCharactersSkills());
    console.log(await this.characterSpellsService.getCharactersSpells());
    console.log(await this.spellService.getSpells());
    console.log(await this.equipmentService.getEquipments());
  }

}
