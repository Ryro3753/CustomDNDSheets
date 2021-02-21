import { Injectable } from "@angular/core"
import { CharacterSavingThrows } from "src/app/models/character/character-saving-throws.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSavingThrowsService {
constructor(readonly httpService: HttpService){
}

public getCharactersSavingThrows(): Promise<CharacterSavingThrows[]> {
  return  new Promise<CharacterSavingThrows[]>((resolve, reject) => {
    this.httpService.get('CharacterSavingThrows', 'GetCharactersSavingThrows').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterSavingThrows(characterRef : number): Promise<CharacterSavingThrows> {
  return  new Promise<CharacterSavingThrows>((resolve, reject) => {
    this.httpService.get('CharacterSavingThrows', 'GetCharacterSavingThrows', {characterRef}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterSavingThrows(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterSavingThrows', 'DeleteCharacterSavingThrows', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterSavingThrows(model : CharacterSavingThrows): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterSavingThrows', 'InsertOrUpdateCharacterSavingThrows',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}