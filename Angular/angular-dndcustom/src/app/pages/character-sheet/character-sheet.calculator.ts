import { Injectable } from "@angular/core";
import { CharacterApperance } from "src/app/models/character/character-apperance.model";
import { CharacterSavingThrowsProfiency } from "src/app/models/character/character-saving-throws.model";
import { CharacterSecondaryStats } from "src/app/models/character/character-secondary-stats.model";
import { Character, CharacterCard } from "src/app/models/Character/Character.model";

@Injectable()
export  class  CharacterSheetCalculator{

  constructor() { }

  static async secondaryStatModifierCalculate(secondaryStats : CharacterSecondaryStats) : Promise<CharacterSecondaryStats>{
    let modifiers = {} as CharacterSecondaryStats;
    const keys = Object.getOwnPropertyNames(secondaryStats);
    keys.forEach(i => {
      modifiers[i] = Math.floor((secondaryStats[i] / 2)-5); //Formula is = (Stat / 2) - 5    for modifiers of that stat
    })
    return modifiers;
  }

  static savingThrowsProfiencyCalculate(characterProfiency : string) : CharacterSavingThrowsProfiency{
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

  static async readDataFromService(characters : Character[], apeerances : CharacterApperance[]){
    let cards = [] as CharacterCard[];
    characters.forEach(e => {
      let apperance = apeerances.filter(i => i.characterRef == e.ref);
      if(apperance.length > 0){
        const cardData = {
          ref : e.ref,
          characterName : e.characterName,
          class : e.class,
          level : e.level,
          race : e.race,
          size : apperance[0].size,
          eyes : apperance[0].eyes,
          height : apperance[0].height,
          hair : apperance[0].hair,
          skin : apperance[0].skin,
          age : apperance[0].age,
          weight : apperance[0].weight,
          profiencyValues : e.profiencyValues
        } as CharacterCard;
        cards.push(cardData);
      }
    })
    return cards;
  }

}
