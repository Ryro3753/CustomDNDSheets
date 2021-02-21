import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterApperance } from "src/app/models/character/character-apperance.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
  providedIn: "root"
})
export class CharacterApperanceService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterApperance')
  }

  public getCharactersApperance(): Promise<CharacterApperance[]> {
    return this.get('GetCharactersApperances');
  }

  public getCharacterApperance(characterRef: number): Promise<CharacterApperance> {
    return this.get('GetCharacterApperance', { characterRef });
  }

  public deleteCharacterApperance(ref: number): Promise<any> {
    return this.delete('DeleteCharacterApperance', { ref });
  }

  public insertOrUpdateCharacterApperance(model: CharacterApperance): Promise<number> {
    return this.post('InsertOrUpdateCharactersApperance', model);
  }
}