import { Injectable } from "@angular/core"
import { CharacterApperance } from "src/app/models/Character/CharacterApperance.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterApperanceService {
constructor(readonly httpService: HttpService){
}

public getCharactersApperance(): Promise<CharacterApperance[]> {
  return  new Promise<CharacterApperance[]>((resolve, reject) => {
    this.httpService.get('CharacterApperance', 'GetCharactersApperance').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterApperance(ref : number): Promise<CharacterApperance> {
  return  new Promise<CharacterApperance>((resolve, reject) => {
    this.httpService.get('CharacterApperance', 'GetCharacterApperance', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterApperance(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterApperance', 'DeleteCharacterApperance', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterApperance(model : CharacterApperance): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterApperance', 'InsertOrUpdateCharactersApperance',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}