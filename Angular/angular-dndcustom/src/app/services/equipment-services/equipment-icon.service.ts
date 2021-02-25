import { HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core"



@Injectable({
  providedIn: "root"
})
export class EquipmentIconService {
  constructor(readonly httpClient: HttpClient) {
  }

  public uploadIcon(File : File, EquipmentRef): Promise<string> {
    const formData = new FormData();
    formData.append('file',File);
    const url = "https://localhost:44330/EquipmentIcon/UploadIcon?EquipmentRef=" + EquipmentRef
    console.log(File);
    return new Promise<any>((resolve, reject) => {
      this.httpClient.post(url, formData, {responseType: 'text', observe: 'events'})
      .subscribe(event => {
      }, err => {reject(err)});
    });
   }
  }
