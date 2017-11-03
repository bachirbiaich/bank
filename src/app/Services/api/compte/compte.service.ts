import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../../../Services/session/session.service';
import { GetComptesResponse } from '../Interfaces/GetComptesResponse';

@Injectable()
export class CompteService extends ApiService{

  constructor(private http:HttpClient) {
    super();
   }
  
  getComptes(): Observable<GetComptesResponse>{
    return this.http.get<GetComptesResponse>(`${this.apiURI}/api/getcomptes`);
  }
}