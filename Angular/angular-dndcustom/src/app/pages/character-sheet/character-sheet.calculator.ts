import { Injectable } from "@angular/core";
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

}
