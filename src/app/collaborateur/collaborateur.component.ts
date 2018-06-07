import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../models/collaborateur';
import { CollaborateurService } from '../services/collaborateur.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/observable';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'dateEmbauche', 'poste', 'grade', 'matricule', 'actions'];
  dataSource = new MatTableDataSource<Collaborateur>();
  constructor(private collaborateurService: CollaborateurService) { }
  ngOnInit() {
    this.collaborateurService.getCollaborateur().subscribe(collabList => this.dataSource.data = collabList);
    }
}

