import { Injectable } from "@angular/core"
import { Character } from "src/app/models/character.model"
import { HttpService } from "../http.service"



@Injectable({
    providedIn: "root"
})
export class CharacterService {


    constructor(readonly httpService: HttpService){
    }

 /*  async getCharacters() : Promise<Observable<Character[]>> {
    return await this.httpClient.get<Character[]>(this.baseURL + "Character/GetCharacters")
}*/

/*async getCharacter(ref : number) : Promise<Observable<Character>> {
  let params = new URLSearchParams();
  params.append('Ref',ref.toString());
  await this.httpClient.get<Character>(this.baseURL + "Character/GetCharacter", {params: params });

}*/
public getCharacters(): Promise<Character[]> {
  return  new Promise<Character[]>((resolve, reject) => {
    this.httpService.get('Character', 'GetCharacters').subscribe(data => {
      resolve(data)
    }, err => { reject(err) })
  })
}

}