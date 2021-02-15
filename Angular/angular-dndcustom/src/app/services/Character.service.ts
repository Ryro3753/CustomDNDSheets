import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'


@Injectable({
    providedIn: "root"
})
export class CharacterService{

    baseURL : string = "https://localhost:44330/";

    constructor(readonly httpClient: HttpClient){

    }


async getCharacter() : Promise<any> {
    return await this.httpClient.get(this.baseURL + "Character/GetCharacters").subscribe(i => {
        console.log(i);
    })
}


}