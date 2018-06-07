import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { Observable, of  }   from 'rxjs';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { Demande } from '../../models/demande';
import { catchError, map, tap, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DemandeService {


  private serviceUrl = 'http://localhost:62392/api/demandes';
 
  constructor(private http: HttpClient) { }

  
  //Population du tableaux de demandes.
  getDemande(): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.serviceUrl);
  }


  //Méthode pour ajouter une nouvelle demande.
  createDemande(demande): Observable<Demande> {
    let body = JSON.stringify(demande);
    return this.http.post<Demande>(this.serviceUrl, body, httpOptions);
  }


  //Méthode pour supprimer la demande.
  deleteDemande (demande): Observable<Demande> {
    const id = typeof demande === 'number' ? demande : demande.id;
    const url = `${this.serviceUrl}/${id}`;
    return this.http.delete<Demande>(url, httpOptions)
  }


  //Mettre à jour la demande.
  updateDemande (demandeId : string): Observable<any> {
    let body = JSON.stringify(demandeId);
    return this.http.put(this.serviceUrl, body, httpOptions);
  }


}
