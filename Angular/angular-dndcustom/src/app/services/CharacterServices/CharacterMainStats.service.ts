import { Injectable } from "@angular/core"
import { CharacterMainStats } from "src/app/models/Character/CharacterMainStats.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterMainStatsService {
constructor(readonly httpService: HttpService){
}

public getCharactersMainStats(): Promise<CharacterMainStats[]> {
  return  new Promise<CharacterMainStats[]>((resolve, reject) => {
    this.httpService.get('CharacterMainStats', 'GetCharactersMainStats').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterMainStats(characterRef : number): Promise<CharacterMainStats> {
  return  new Promise<CharacterMainStats>((resolve, reject) => {
    this.httpService.get('CharacterMainStats', 'GetCharacterMainStats', {characterRef}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterMainStats(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterMainStats', 'DeleteCharacterMainStats', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterMainStats(model : CharacterMainStats): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterMainStats', 'InsertOrUpdateCharacterMainStats',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}