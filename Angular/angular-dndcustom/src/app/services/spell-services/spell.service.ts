import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Spell } from "src/app/models/spell/spell.model"
import { BaseDataService } from "../base-data.service"

@Injectable({
  providedIn: "root"
})
export class SpellService extends BaseDataService {
  constructor(readonly httpClient: HttpClient) {
    super(httpClient, 'Spell')
  }

  public getSpells(): Promise<Spell[]> {
    return this.get('GetSpells')
  }

  public getSpell(ref: number): Promise<Spell> {
    return this.get('GetSpell', { ref })
  }

  public deleteSpell(ref: number): Promise<any> {
    return this.delete('DeleteSpell', { ref })
  }

  public insertOrUpdateSpell(model: Spell): Promise<number> {
    return this.post('InsertOrUpdateSpell', model)

  }

  public hasIconChange(ref: number){
    return this.get('HasIconChange', {ref})

  }
}