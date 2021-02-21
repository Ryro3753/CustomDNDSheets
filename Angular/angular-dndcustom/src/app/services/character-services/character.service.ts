import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Character } from "src/app/models/Character/Character.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
    providedIn: "root"
})
export class CharacterService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterSpells')
  }
public getCharacters(): Promise<Character[]> {
  return this.get('GetCharacters');
}

public getCharacter(ref : number): Promise<Character> {
  return this.get('GetCharacter', {ref});
}

public deleteCharacter(ref : number): Promise<any> {
  return this.delete('DeleteCharacter', {ref});
}

public insertOrUpdateCharacter(model : Character): Promise<number> {
  return this.post('InsertOrUpdateCharacter',model);
}
}