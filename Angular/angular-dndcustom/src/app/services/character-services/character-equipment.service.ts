import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { CharacterEquipment } from "src/app/models/character/character-equipment.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
  providedIn: "root"
})
export class CharacterEquipmentService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'CharacterEquipment')
  }

  public getEveryCharacterEquipment(): Promise<CharacterEquipment[]> {
    return this.get('GetEveryCharacterEquipment');
  }

  public getCharacterEquipments(ref: number): Promise<CharacterEquipment> {
    return this.get('GetCharacterEquipments', { ref });
  }

  public deleteCharacterEquipment(ref: number): Promise<any> {
    return this.delete('DeleteCharacterEquipment', { ref });
  }

  public insertOrUpdateCharacterEquipments(model: CharacterEquipment): Promise<number> {
    return this.post('InsertOrUpdateCharacterEquipments', model);

  }
}