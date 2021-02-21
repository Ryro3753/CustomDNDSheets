import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterSkills } from "src/app/models/character/character-skills.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSkillsService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterSkills')
  }

public getCharactersSkills(): Promise<CharacterSkills[]> {
  return this.get('GetCharactersSkills');
}

public getCharacterSkills(characterRef : number): Promise<CharacterSkills> {
  return this.get('GetCharacterSkills', {characterRef});
}

public deleteCharacterSkills(ref : number): Promise<any> {
  return this.delete('DeleteCharacterSkills', {ref});
}

public insertOrUpdateCharacterSkills(model : CharacterSkills): Promise<number> {
  return this.post('InsertOrUpdateCharacterSkills',model);
}
}