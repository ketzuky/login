
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
    
  login(body){
    let method = "https://reqres.in/api/login";
    return this.httpPost(method, body);
  }
  httpPost(method,body){
    return this.http.post(method, body)
  }
}
