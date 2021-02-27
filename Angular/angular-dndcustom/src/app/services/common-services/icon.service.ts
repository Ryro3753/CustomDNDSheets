import { HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { environment } from '../../../environments/environment'



@Injectable({
  providedIn: "root"
})
export class IconService {
  constructor(readonly httpClient: HttpClient) {
  }

  public  uploadIcon(File : File, Ref : number, Type : number): Promise<string> {
    const formData = new FormData();
    formData.append('file',File);
    const url = environment.service+"/Icon/UploadIcon?Ref=" + Ref + "&Type=" + Type
    return new Promise<any>((resolve, reject) => {
       this.httpClient.post(url, formData, {responseType: 'text', observe: 'events'})
      .subscribe(event => {
      }, err => {reject(err)});
    });
   }

   static getImagesPath(Type:number):string{ //Type = 1 Equipment, Type = 2 Spell
     if(Type == 1){
      return environment.service + "/images/EquipmentImages/";
     }
     else{
      return environment.service + "/images/SpellImages/";
     }
   }
   static getPlaceOverIcon(Type:number):string{
    if(Type == 1){
      return environment.service + "/images/EquipmentImages/PlaceOver.jpg";
     }
     else{
      return environment.service + "/images/SpellImages/PlaceOver.jpg";
     }
  }

  }
