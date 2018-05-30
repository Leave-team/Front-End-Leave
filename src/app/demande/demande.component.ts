import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from "rxjs/observable";
import { IDemande } from '../models/demande';
import { DemandeService } from '../services/demande/demande.service';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  dataSource = new DemandeDataSource(this.demandeService);
  displayedColumns = ['description', 'dateDebut', 'dateFin', 'nombreJours', 'decision', 'motifRefus'];

  constructor(private demandeService: DemandeService){}
  ngOnInit() {}
}

export class DemandeDataSource extends DataSource<any> {
  constructor(private demandeService: DemandeService) {
    super();
  }


  connect(): Observable<IDemande[]> {
    return this.demandeService.getDemande();
  }

  
  disconnect() {}
}

