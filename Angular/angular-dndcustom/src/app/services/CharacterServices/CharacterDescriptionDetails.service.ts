import { Injectable } from "@angular/core"
import { CharacterApperance } from "src/app/models/Character/CharacterApperance.model"
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

public getCharacterDescriptionDetails(ref : number): Promise<CharacterDescriptionDetails> {
  return  new Promise<CharacterDescriptionDetails>((resolve, reject) => {
    this.httpService.get('CharacterDescriptionDetails', 'GetCharacterDescriptionDetails', {ref}).subscribe(data => {
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