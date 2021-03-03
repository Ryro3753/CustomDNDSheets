import { Injectable } from "@angular/core";
import { CharacterSavingThrowsProfiency } from "src/app/models/character/character-saving-throws.model";
import { CharacterSecondaryStats } from "src/app/models/character/character-secondary-stats.model";

@Injectable()
export class CharacterSheetCalculator{

  constructor() { }

  async secondaryStatModifierCalculate(secondaryStats : CharacterSecondaryStats) : Promise<CharacterSecondaryStats>{
    let modifiers = {} as CharacterSecondaryStats;
    const keys = Object.getOwnPropertyNames(secondaryStats);
    keys.forEach(i => {
      modifiers[i] = Math.floor((secondaryStats[i] / 2)-5); //Formula is = (Stat / 2) - 5    for modifiers of that stat
    })
    return modifiers;
  }

  async savingThrowsProfiencyCalculate(characterProfiency : string) : Promise<CharacterSavingThrowsProfiency>{
    let profiencies = {
      strength : false,
      dexterity : false,
      charisma : false,
      constitution : false,
      wisdom : false,
      intelligence : false
    } as CharacterSavingThrowsProfiency;
    let keys = Object.keys(profiencies);
    keys.forEach(i => {
      profiencies[i] = characterProfiency.includes(i) ? true : false;
    })
    return profiencies
  }

}
