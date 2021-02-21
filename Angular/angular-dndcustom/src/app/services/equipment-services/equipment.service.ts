import { Injectable } from "@angular/core"
import { Equipment } from "src/app/models/equipment/equipment.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class EquipmentService {
constructor(readonly httpService: HttpService){
}

public getEquipments(): Promise<Equipment[]> {
  return  new Promise<Equipment[]>((resolve, reject) => {
    this.httpService.get('Equipment', 'GetEquipments').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getEquipment(ref : number): Promise<Equipment> {
  return  new Promise<Equipment>((resolve, reject) => {
    this.httpService.get('Equipment', 'GetEquipment', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteEquipment(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('Equipment', 'DeleteEquipment', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateEquipment(model : Equipment): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('Equipment', 'InsertOrUpdateEquipment',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}