import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from "rxjs/observable";
import { Demande } from '../models/demande';
import { DemandeService } from '../services/demande/demande.service';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  demandes: Demande[];

  dataSource = new DemandeDataSource(this.demandeService);
  displayedColumns = ['description', 'dateDebut', 'dateFin', 'nombreJours', 'decision', 'motifRefus'];

  constructor(private demandeService: DemandeService){}
  ngOnInit() {}

}





//Populate the DataTable
export class DemandeDataSource extends DataSource<any> {
  constructor(private demandeService: DemandeService) {
    super();
  }


  connect(): Observable<Demande[]> {


     console.log(new Date());
     console.log(new Date().toISOString().substring(0, 10));
    return this.demandeService.getDemande();
  }

  
  disconnect() {}
}

