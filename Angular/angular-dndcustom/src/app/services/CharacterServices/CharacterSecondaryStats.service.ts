import { Injectable } from "@angular/core"
import { CharacterSecondaryStats } from "src/app/models/Character/CharacterSecondaryStats.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSecondaryStatsService {
constructor(readonly httpService: HttpService){
}

public getCharactersSecondaryStats(): Promise<CharacterSecondaryStats[]> {
  return  new Promise<CharacterSecondaryStats[]>((resolve, reject) => {
    this.httpService.get('CharacterSecondaryStats', 'GetCharactersSecondaryStats').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterSecondaryStats(characterRef : number): Promise<CharacterSecondaryStats> {
  return  new Promise<CharacterSecondaryStats>((resolve, reject) => {
    this.httpService.get('CharacterSecondaryStats', 'GetCharacterSecondaryStats', {characterRef}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterSecondaryStats(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterSecondaryStats', 'DeleteCharacterSecondaryStats', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterSecondaryStats(model : CharacterSecondaryStats): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterSecondaryStats', 'InsertOrUpdateCharacterSecondaryStats',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}