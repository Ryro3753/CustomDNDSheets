import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterSpells } from "src/app/models/character/character-spells.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSpellsService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterSpells')
  }

public getCharactersSpells(): Promise<CharacterSpells[]> {
  return this.get('GetEveryCharacterSpells');
}

public getCharacterSpells(characterRef : number): Promise<CharacterSpells> {
  return this.get('GetCharacterSpells', {characterRef});
}

public deleteCharacterSpells(ref : number): Promise<any> {
  return this.delete('DeleteCharacterSpells', {ref});
}

public insertOrUpdateCharacterSpells(model : CharacterSpells): Promise<number> {
  return this.post('InsertOrUpdateCharacterSpells',model);
}
}