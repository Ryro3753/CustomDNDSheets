import { Injectable } from "@angular/core"
import { CharacterEquipment } from "src/app/models/character/character-equipment.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterEquipmentService {
constructor(readonly httpService: HttpService){
}

public getEveryCharacterEquipment(): Promise<CharacterEquipment[]> {
  return  new Promise<CharacterEquipment[]>((resolve, reject) => {
    this.httpService.get('CharacterEquipment', 'GetEveryCharacterEquipment').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterEquipments(ref : number): Promise<CharacterEquipment> {
  return  new Promise<CharacterEquipment>((resolve, reject) => {
    this.httpService.get('CharacterEquipment', 'GetCharacterEquipments', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterEquipment(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterEquipment', 'DeleteCharacterEquipment', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterEquipments(model : CharacterEquipment): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterEquipment', 'InsertOrUpdateCharacterEquipments',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}