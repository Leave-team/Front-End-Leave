import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }   from '@angular/common/http';
import { Observable, of  }   from 'rxjs';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { IDemande } from '../../models/demande';
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
  getDemande(): Observable<IDemande[]> {
    return this.http.get<IDemande[]>(this.serviceUrl);
  }


  //Méthode pour ajouter une nouvelle demande.
  createDemande(demande: IDemande): Observable<IDemande> {
    return this.http.post<IDemande>(this.serviceUrl, demande, httpOptions);
  }


  //Méthode pour supprimer la demande.
  deleteDemande (demande: IDemande | number): Observable<IDemande> {
    const id = typeof demande === 'number' ? demande : demande.id;
    const url = `${this.serviceUrl}/${id}`;
    return this.http.delete<IDemande>(url, httpOptions)
  }


  //Mettre à jour la demande.
  updateDemande (demande: IDemande): Observable<any> {
    return this.http.put(this.serviceUrl, demande, httpOptions);
  }


}
