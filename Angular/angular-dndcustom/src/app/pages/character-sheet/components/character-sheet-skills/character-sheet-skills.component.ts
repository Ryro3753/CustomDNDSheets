import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterSkills, CharacterSkillsProfiency } from 'src/app/models/character/character-skills.model';
import { Character } from 'src/app/models/Character/Character.model';
import { CharacterSkillsService } from 'src/app/services/character-services/character-skills.service';
import { CharacterSheetCalculator } from '../../character-sheet.calculator';

@Component({
  selector: 'app-character-sheet-skills',
  templateUrl: './character-sheet-skills.component.html',
  styleUrls: ['./character-sheet-skills.component.css']
})
export class CharacterSheetSkillsComponent implements OnInit {

  constructor(readonly service: CharacterSkillsService) { }
  allSkills: CharacterSkills[];
  characterSkills: CharacterSkills;
  characterSkillProfiency: CharacterSkillsProfiency;
  level: number;
  colorClass : string = "";
  keys : string[];
  
  @Output() ContextClicked : EventEmitter<string> = new EventEmitter<string>();

  async ngOnInit(): Promise<void> {
    this.allSkills = await this.service.getCharactersSkills();
    this.keys = CharacterSheetCalculator.skillsProficiency();
  }

  skillsFilter(characterRef: number): CharacterSkills {
    return this.allSkills.filter(i => i.characterRef == characterRef)[0];
  }

  skillsProfiencyFilter(characterProfiency: string): CharacterSkillsProfiency {
    return CharacterSheetCalculator.skillsProfiencyCalculate(characterProfiency);
  }

  useCamelCaseToSentence(name : string){
    return CharacterSheetCalculator.camelCaseToSentence(name);
  }

  contextClicked(item){
    this.ContextClicked.emit(item);
  }

  @Input() set character(character: Character) {
    if (character.ref == 0) { return }
    this.level = character.level;
    const skills = this.skillsFilter(character.ref);
    this.characterSkillProfiency = this.skillsProfiencyFilter(character.profiencyValues);
    this.characterSkills = CharacterSheetCalculator.skillsProfiencyIncrease(this.characterSkillProfiency, skills, this.level);
    this.colorClass = "color" + character.class.toLowerCase();
  }
}
