import { HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { environment } from '../../../environments/environment'



@Injectable({
  providedIn: "root"
})
export class IconService {
  constructor(readonly httpClient: HttpClient) {
  }

  public  uploadEquipmentIcon(File : File, EquipmentRef): Promise<string> {
    const formData = new FormData();
    formData.append('file',File);
    const url = environment.service+"/EquipmentIcon/UploadIcon?EquipmentRef=" + EquipmentRef
    console.log(File);
    return new Promise<any>((resolve, reject) => {
       this.httpClient.post(url, formData, {responseType: 'text', observe: 'events'})
      .subscribe(event => {
      }, err => {reject(err)});
    });
   }

   public getImagesPath():string{
     return environment.service + "/images/EquipmentImages/";
   }
   static getPlaceOverIcon():string{
    return environment.service + "/images/EquipmentImages/PlaceOver.jpg";
  }

  }
