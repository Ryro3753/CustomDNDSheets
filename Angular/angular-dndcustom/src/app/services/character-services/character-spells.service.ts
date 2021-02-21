import { Injectable } from "@angular/core"
import { CharacterSpells } from "src/app/models/character/character-spells.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterSpellsService {
constructor(readonly httpService: HttpService){
}

public getCharactersSpells(): Promise<CharacterSpells[]> {
  return  new Promise<CharacterSpells[]>((resolve, reject) => {
    this.httpService.get('CharacterSpells', 'GetCharactersSpells').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public getCharacterSpells(characterRef : number): Promise<CharacterSpells> {
  return  new Promise<CharacterSpells>((resolve, reject) => {
    this.httpService.get('CharacterSpells', 'GetCharacterSpells', {characterRef}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public deleteCharacterSpells(ref : number): Promise<any> {
  return  new Promise<any>((resolve, reject) => {
    this.httpService.delete('CharacterSpells', 'DeleteCharacterSpells', {ref}).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

public insertOrUpdateCharacterSpells(model : CharacterSpells): Promise<number> {
  return  new Promise<number>((resolve, reject) => {
    this.httpService.post('CharacterSpells', 'InsertOrUpdateCharacterSpells',model).subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}
}