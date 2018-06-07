import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from "rxjs/observable";
import { Demande } from '../models/demande';
import { DemandeService } from '../services/demande/demande.service';
import { NavbarService } from '../services/navbar/navbar.service';





@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  demandes: Demande[];
  demande: Demande;
  dmnd:any;

  dataSource = new DemandeDataSource(this.demandeService);


  displayedColumns = ['ID','description', 'dateDebut', 'dateFin', 'nombreJours', 'decision', 'motifRefus', 'actions'];

  constructor(public demandeService: DemandeService,public nav : NavbarService ){}

  ngOnInit() {
   this.nav.show();
  }

  onCLickDelete(id : number){
    this.demandeService.deleteDemande(id).subscribe();
  }

  

}





//Populate the DataTable
export class DemandeDataSource extends DataSource<any> {
  constructor(private demandeService: DemandeService) {
    super();
  }


  connect(): Observable<Demande[]> {
    return this.demandeService.getDemande();
  }


  disconnect() {}
}

