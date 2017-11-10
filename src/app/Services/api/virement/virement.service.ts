import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { VirementsResponse } from '../Interfaces/VirementsResponse';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VirementService extends ApiService {

  constructor(private http: HttpClient) {
    super();
  }

  getVirements(): Observable<VirementsResponse> {
    return this.http.get<VirementsResponse>(`${this.apiURI}/api/getvirements`);
  }

  addVirements(data): Observable<VirementsResponse> {
    const body = {
      recipient_iban: data.recipient_iban,
      date: data.date,
      montant: data.montant,
    };
    return this.http.post<VirementsResponse>(`${this.apiURI}/api/addvirement`, body);

  }
}
