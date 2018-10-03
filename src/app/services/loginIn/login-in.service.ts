import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class LoginInService {
  private url = 'https://129.150.198.126:9022/order/oauth2/token';
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  getName() {
    return 'Login';
  }
  getHttp(): Observable<any> {
     return this.http.get(this.url);
   }
   postGetToken(login, password): Observable<any>{
     const body = `grant_type=password&username=${login}&password=${password}&scope=urn:opc:idm:__myscopes__`;
     return this.http.post(this.url, body, this.httpOptions);
   }
}
