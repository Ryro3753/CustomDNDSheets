import { Injectable } from "@angular/core"
import { CharacterSkills } from "src/app/models/character/character-skills.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSkillsService {
constructor(readonly httpService: HttpService){
}

public getCharactersSkills(): Promise<CharacterSkills[]> {
  return  new Promise<CharacterSkills[]>((resolve, reject) => {
    this.httpService.get('CharacterSkills', 'GetCharactersSkills').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterSkills(characterRef : number): Promise<CharacterSkills> {
  return  new Promise<CharacterSkills>((resolve, reject) => {
    this.httpService.get('CharacterSkills', 'GetCharacterSkills', {characterRef}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterSkills(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterSkills', 'DeleteCharacterSkills', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterSkills(model : CharacterSkills): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterSkills', 'InsertOrUpdateCharacterSkills',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}