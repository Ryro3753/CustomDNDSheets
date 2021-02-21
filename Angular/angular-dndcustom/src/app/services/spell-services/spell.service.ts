import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Spell } from "src/app/models/spell/spell.model"
import { BaseDataService } from "../base-data.service"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class SpellService  extends BaseDataService {
constructor(readonly httpService: HttpClient){
  super(httpService, 'Spell')
}

public getSpells(): Promise<Spell[]> {
  return this.get('GetSpells')
}

public getSpell(ref : number): Promise<Spell> {
  return this.get('GetSpell', { ref })
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