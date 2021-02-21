import { Injectable } from "@angular/core"
import { Spell } from "src/app/models/Spell/Spell.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class SpellService {
constructor(readonly httpService: HttpService){
}

public getSpells(): Promise<Spell[]> {
  return  new Promise<Spell[]>((resolve, reject) => {
    this.httpService.get('Spell', 'GetSpells').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getSpell(ref : number): Promise<Spell> {
  return  new Promise<Spell>((resolve, reject) => {
    this.httpService.get('Spell', 'GetSpell', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteSpell(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('Spell', 'DeleteSpell', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateSpell(model : Spell): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('Spell', 'InsertOrUpdateSpell',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}