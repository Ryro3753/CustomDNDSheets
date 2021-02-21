import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterMoney } from "src/app/models/character/character-money.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
    providedIn: "root"
})
export class CharacterMoneyService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterMoney')
  }

public getCharactersMoney(): Promise<CharacterMoney[]> {
  return this.get('GetCharactersMoney');
}

public getCharacterMoney(characterRef : number): Promise<CharacterMoney> {
  return this.get('GetCharacterMoney', {characterRef})
}

public deleteCharacterMoney(ref : number): Promise<any> {
  return this.delete('DeleteCharacterMoney', {ref});
}

public insertOrUpdateCharacterMoney(model : CharacterMoney): Promise<number> {
  return this.post('InsertOrUpdateCharacterMoney',model);
}
}