import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterDescriptionDetails } from "src/app/models/character/character-description-details.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
  providedIn: "root"
})
export class CharacterDescriptionDetailsService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterDescriptionDetails')
  }

  public getCharactersDescriptionDetails(): Promise<CharacterDescriptionDetails[]> {
    return this.get('GetCharactersDescriptionDetails');
  }

  public getCharacterDescriptionDetails(characterRef: number): Promise<CharacterDescriptionDetails> {
    return this.get('GetCharacterDescriptionDetails', { characterRef });
  }

  public deleteCharacterDescriptionDetails(ref: number): Promise<any> {
    return this.delete('DeleteCharacterDescriptionDetails', { ref });
  }

  public insertOrUpdateCharactersDescriptionDetails(model: CharacterDescriptionDetails): Promise<number> {
    return this.post('InsertOrUpdateCharactersDescriptionDetails', model);
  }
}