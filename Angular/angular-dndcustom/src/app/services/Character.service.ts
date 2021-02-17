import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Character } from "../models/character.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class CharacterService {

    baseURL : string = "https://localhost:44330/";

    constructor(readonly httpClient: HttpClient){
    }

  async getCharacter() : Promise<Observable<Character[]>> {
    return await this.httpClient.get<Character[]>(this.baseURL + "Character/GetCharacters");

}


}