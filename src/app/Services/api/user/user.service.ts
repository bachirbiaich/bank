import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../Interfaces/LoginResponse';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends ApiService{

  constructor(private http:HttpClient) {
    super();
   }
  
  login(mail:string, password:string): Observable<LoginResponse>{
    const body = { username: mail, password: password};
    return this.http.post<LoginResponse>(`${this.apiURI}/login`, body);
  }
}
