import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Equipment } from "src/app/models/equipment/equipment.model"
import { BaseDataService } from "../base-data.service"



@Injectable({
  providedIn: "root"
})
export class EquipmentService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'Equipment')
  }

  public getEquipments(): Promise<Equipment[]> {
    return this.get('GetEquipments')
  }

  public getEquipment(ref: number): Promise<Equipment> {
    return this.get('GetEquipment', { ref })
  }

  public deleteEquipment(ref: number): Promise<any> {
    return this.delete('DeleteEquipment', { ref });
  }

  public insertOrUpdateEquipment(model: Equipment): Promise<number> {
    return this.post('InsertOrUpdateEquipment', model)
  }
}