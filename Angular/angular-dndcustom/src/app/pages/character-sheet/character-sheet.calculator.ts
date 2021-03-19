import { Injectable } from "@angular/core";
import { CharacterApperance } from "src/app/models/character/character-apperance.model";
import { CharacterSavingThrows, CharacterSavingThrowsProfiency } from "src/app/models/character/character-saving-throws.model";
import { CharacterSecondaryStats, CharacterSecondaryStatsValues } from "src/app/models/character/character-secondary-stats.model";
import { CharacterSkills, CharacterSkillsProfiency } from "src/app/models/character/character-skills.model";
import { Character, CharacterCard } from "src/app/models/Character/Character.model";

@Injectable()
export  class  CharacterSheetCalculator{

  constructor() { }

  static secondaryStatModifierCalculate(secondaryStats : CharacterSecondaryStats) : CharacterSecondaryStats{
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

  static secondaryStatsValues(secondaryStats : CharacterSecondaryStats) : CharacterSecondaryStatsValues{
    return {
      strength : secondaryStats.strength,
      dexterity : secondaryStats.dexterity,
      constitution : secondaryStats.constitution,
      intelligence : secondaryStats.intelligence,
      wisdom : secondaryStats.wisdom,
      charisma : secondaryStats.charisma
    } as CharacterSecondaryStatsValues
  }

  //ToDo: Future string service will be implemented and this will be transfer to that service. I took this code from 
  //https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
  static camelCaseToSentence(camelCase : string) {
    let result = camelCase.replace( /([A-Z])/g, " $1" );
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult
  }

  static skillsProficiency() : string[]{
    let profiencies = {
      acrobatics : false,
      animalHandling : false,
      arcana : false,
      athletics : false,
      deception : false,
      history : false,
      insight : false,
      intimidation : false,
      investigation : false,
      medicine : false,
      nature : false,
      perception : false,
      performance : false,
      persuasion : false,
      religion : false,
      sleightOfHand : false,
      stealth : false,
      survival : false
    } as CharacterSkillsProfiency;
    return Object.keys(profiencies);
  }

  static skillsProfiencyCalculate(characterProfiency : string) : CharacterSkillsProfiency{
    const keys = this.skillsProficiency();
    let profiencies = {} as CharacterSkillsProfiency;
    keys.forEach(i => {
      profiencies[i] = characterProfiency.includes(i) ? true : false;
    })
      return profiencies
  }

  static  readDataFromService(characters : Character[], apeerances : CharacterApperance[]){
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

  static skillsProfiencyIncrease(profiencies : CharacterSkillsProfiency, skills : CharacterSkills, level : number) : CharacterSkills{
    let keys = Object.keys(profiencies);
    let skillsWithProficiency = [] as CharacterSkills;
    let proficiencyBonus = Math.ceil(1+(level/4));
    keys.forEach(i => {
      if(profiencies[i]){
        skillsWithProficiency[i] = skills[i] + proficiencyBonus;
      }
      else {
        skillsWithProficiency[i] = skills[i];
      }
    })
    return skillsWithProficiency;
  }
  
  static savingThrowProfiencyIncrease(profiencies : CharacterSavingThrowsProfiency, savingThrows : CharacterSavingThrows, level : number) : CharacterSavingThrows{
    let keys = Object.keys(profiencies);
    let savingThrowsWithProficiency = [] as CharacterSavingThrows;
    let proficiencyBonus = Math.ceil(1+(level/4));
    keys.forEach(i => {
      if(profiencies[i]){
        savingThrowsWithProficiency[i] = savingThrows[i] + proficiencyBonus;
      }
      else {
        savingThrowsWithProficiency[i] = savingThrows[i];
      }
    })
    return savingThrowsWithProficiency;
  }
}
