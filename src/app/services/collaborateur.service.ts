import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { Collaborateur } from '../models/collaborateur';
import { catchError, map, tap, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  private serviceUrl = 'http://localhost:62392/api/collaborateur';
  constructor(private http: HttpClient) { }

  getCollaborateur(): Observable<Collaborateur[]> {
    return this.http.get<Collaborateur[]>(this.serviceUrl);
  }


  createCollaborateur(collaborateur): Observable<Collaborateur> {
    const body = JSON.stringify(collaborateur);
    return this.http.post<Collaborateur>(this.serviceUrl, body, httpOptions);
  }

  deleteCollaborateur (collaborateur): Observable<Collaborateur> {
    const id = typeof collaborateur === 'number' ? collaborateur : collaborateur.id;
    const url = `${this.serviceUrl}/${id}`;
    return this.http.delete<Collaborateur>(url, httpOptions);
  }

  updateCollaborateur (collaborateur): Observable<any> {
    const body = JSON.stringify(collaborateur);
    return this.http.put(this.serviceUrl, body, httpOptions);
  }

}
