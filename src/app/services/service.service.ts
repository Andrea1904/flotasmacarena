import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './general';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }
  getHome(nit: number): Observable<any>{
    const headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
      //'Content-Type':'application/json',
     //'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
     'Access-Control-Allow-Methods':'GET, OPTIONS',
     'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
     'Content-Type':'application/json'

    });
    console.log(this.url)
    const data=  this._http.get(`${this.url}/800220154`, {'headers':headers})
    console.log(data)
    return data;
  };

}
