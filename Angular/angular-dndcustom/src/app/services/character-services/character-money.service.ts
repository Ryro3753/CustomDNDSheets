import { Injectable } from "@angular/core"
import { CharacterMoney } from "src/app/models/character/character-money.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterMoneyService {
constructor(readonly httpService: HttpService){
}

public getCharactersMoney(): Promise<CharacterMoney[]> {
  return  new Promise<CharacterMoney[]>((resolve, reject) => {
    this.httpService.get('CharacterMoney', 'GetCharactersMoney').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterMoney(characterRef : number): Promise<CharacterMoney> {
  return  new Promise<CharacterMoney>((resolve, reject) => {
    this.httpService.get('CharacterMoney', 'GetCharacterMoney', {characterRef}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterMoney(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterMoney', 'DeleteCharacterMoney', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterMoney(model : CharacterMoney): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterMoney', 'InsertOrUpdateCharacterMoney',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}