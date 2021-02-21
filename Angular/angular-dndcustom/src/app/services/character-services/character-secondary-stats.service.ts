import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterSecondaryStats } from "src/app/models/character/character-secondary-stats.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSecondaryStatsService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterSecondaryStats')
  }

public getCharactersSecondaryStats(): Promise<CharacterSecondaryStats[]> {
  return this.get('GetCharactersSecondaryStats');
}

public getCharacterSecondaryStats(characterRef : number): Promise<CharacterSecondaryStats> {
  return this.get('GetCharacterSecondaryStats', {characterRef});
}

public deleteCharacterSecondaryStats(ref : number): Promise<any> {
  return this.delete('DeleteCharacterSecondaryStats', {ref});
}

public insertOrUpdateCharacterSecondaryStats(model : CharacterSecondaryStats): Promise<number> {
  return this.post('InsertOrUpdateCharacterSecondaryStats',model);
}
}