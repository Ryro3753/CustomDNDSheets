import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterMainStats } from "src/app/models/character/character-main-stats.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
    providedIn: "root"
})
export class CharacterMainStatsService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterMainStats')
  }

public getCharactersMainStats(): Promise<CharacterMainStats[]> {
return this.get('GetCharactersMainStats');
}

public getCharacterMainStats(characterRef : number): Promise<CharacterMainStats> {
  return this.get('GetCharacterMainStats', {characterRef});
}

public deleteCharacterMainStats(ref : number): Promise<any> {
  return this.delete('DeleteCharacterMainStats', {ref});
}

public insertOrUpdateCharacterMainStats(model : CharacterMainStats): Promise<number> {
  return this.post('InsertOrUpdateCharacterMainStats',model)
}
}