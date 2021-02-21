import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  save<T = any>(controller: string, method: string, data: any): Observable<T> {
    const body = JSON.stringify(data);
    return this.httpClient.post<T>(this.getActionUrl(controller, method), body, httpOptions);
  }

  put<T = any>(controller: string, method: string, data: any) : Observable<T> {
    const body = JSON.stringify(data);
    return this.httpClient.put<T>(this.getActionUrl(controller, method), body, httpOptions);
  } 
  post<T = any>(controller: string, method: string, data: any, responseType: any = "json"): Observable<T> {
    const body = JSON.stringify(data);
    return this.httpClient.post<T>(this.getActionUrl(controller, method), body, { responseType, ...httpOptions });
  } 
  postResponse<T = any>(controller: string, method: string, data: any, responseType: any = "json"): Observable<HttpResponse<T>> {
    const body = JSON.stringify(data);
    return this.httpClient.post<T>(this.getActionUrl(controller, method), body, { responseType, observe: 'response', ...httpOptions });
  } 
  delete<T>(controller: string, method: string, param: any): Observable<T> {
    // the reason of this code is RESTApi requires request as following pattern api/controller/id
    // therefore, we have to put the id into generated url
    if (_.isObject(param)) {
      // when we are sending an object with DELETE still send it with other ways. 
      return this.httpClient.delete<T>(this.getActionUrl(controller, method), { params: new HttpParams({ fromObject: param })  });
    } else {
      return this.httpClient.delete<T>(this.getActionUrl(controller, method) + param);
    }
    return;
  }

  get<T = any>( controller: string, method: string, param: any=null, responseType: any = "json"): Observable<T> {
    return this.httpClient.get<T>(this.getActionUrl(controller, method), { params: new HttpParams({ fromObject: param }), responseType });
  }

  getValue( controller: string, method: string, param: any=null) {
    return this.httpClient.get(this.getActionUrl(controller, method), { responseType: 'text', params: new HttpParams({ fromObject: param }) });
  }

  public getActionUrl(controller: string, method: string) {
      return 'https://localhost:44330/' + controller + "/" + method;
    }

  getParams(param?: any[]) {
    var params = "";
    param.forEach(item => {
      params += "&" + item.key + "=" + item.value;
    });
    return params == "" ? "" : ("?" + (params.substr(1, params.length - 1)));
  }

  getWithUrl(url) {
    return this.httpClient.get(url);
  }

  getUrl(controller: string, method: string) {
    return this.getActionUrl(controller, method);
  }
}


