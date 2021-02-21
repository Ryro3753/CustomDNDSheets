import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterSavingThrows } from "src/app/models/character/character-saving-throws.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSavingThrowsService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterSavingThrows')
  }

public getCharactersSavingThrows(): Promise<CharacterSavingThrows[]> {
  return this.get('GetCharactersSavingThrows');
}

public getCharacterSavingThrows(characterRef : number): Promise<CharacterSavingThrows> {
  return this.get('GetCharacterSavingThrows', {characterRef});
}

public deleteCharacterSavingThrows(ref : number): Promise<any> {
  return this.delete('DeleteCharacterSavingThrows', {ref});
}

public insertOrUpdateCharacterSavingThrows(model : CharacterSavingThrows): Promise<number> {
  return this.post('InsertOrUpdateCharacterSavingThrows',model);
}
}