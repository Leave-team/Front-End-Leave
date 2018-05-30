import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { Observable  }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IDemande } from '../../models/demande';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private serviceUrl = 'http://localhost:62392/api/demandes';
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: HttpClient) { }

  getDemande(): Observable<IDemande[]> {
    return this.http.get<IDemande[]>(this.serviceUrl);
  }


}
