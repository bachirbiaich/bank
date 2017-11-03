import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { GetMouvementsByCompteIdResponse } from '../Interfaces/GetMouvementsByCompteIdResponse';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MouvementService extends ApiService{

  constructor(private http:HttpClient) {
    super();
   }

  getMouvementsByCompteId(compte_id:string): Observable<GetMouvementsByCompteIdResponse >{
    return this.http.get<GetMouvementsByCompteIdResponse>(`${this.apiURI}/api/getmouvements?compte_id=${compte_id}`);
  }

}
