import { Injectable } from "@angular/core"
import { Character } from "src/app/models/Character/character.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterService {
constructor(readonly httpService: HttpService){
}

public getCharacters(): Promise<Character[]> {
  return  new Promise<Character[]>((resolve, reject) => {
    this.httpService.get('Character', 'GetCharacters').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacter(ref : number): Promise<Character> {
  return  new Promise<Character>((resolve, reject) => {
    this.httpService.get('Character', 'GetCharacter', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacter(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('Character', 'DeleteCharacter', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public InsertOrUpdateCharacter(model : Character): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('Character', 'InsertOrUpdateCharacter',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}