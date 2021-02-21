import { Injectable } from "@angular/core"
import { CharacterDescriptionDetails } from "src/app/models/Character/CharacterDescriptionDetails.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterDescriptionDetailsService {
constructor(readonly httpService: HttpService){
}

public getCharactersDescriptionDetails(): Promise<CharacterDescriptionDetails[]> {
  return  new Promise<CharacterDescriptionDetails[]>((resolve, reject) => {
    this.httpService.get('CharacterDescriptionDetails', 'GetCharactersDescriptionDetails').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterDescriptionDetails(characterRef : number): Promise<CharacterDescriptionDetails> {
  return  new Promise<CharacterDescriptionDetails>((resolve, reject) => {
    this.httpService.get('CharacterDescriptionDetails', 'GetCharacterDescriptionDetails', {characterRef}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterDescriptionDetails(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterDescriptionDetails', 'DeleteCharacterDescriptionDetails', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharactersDescriptionDetails(model : CharacterDescriptionDetails): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterDescriptionDetails', 'InsertOrUpdateCharactersDescriptionDetails',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}