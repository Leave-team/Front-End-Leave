import { Component, OnInit } from '@angular/core';
import { Collaborateur } from '../models/collaborateur';
import { CollaborateurService } from '../services/collaborateur.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/observable';
import { MatTableDataSource } from '@angular/material';
import { CollaborateurDataSource } from './collaborateur-datasource';
@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'dateEmbauche', 'poste', 'grade', 'matricule', 'actions'];
  dataSource: CollaborateurDataSource;
  constructor(private collaborateurService: CollaborateurService) { }
  getCollaborateur() {
    this.dataSource = new CollaborateurDataSource(this.collaborateurService);
this.dataSource.loadCollabs();
  }
  ngOnInit() {
    this.getCollaborateur();
  }
  onDelete(collaborateur: any) {
    this.collaborateurService.deleteCollaborateur(collaborateur).subscribe();
    this.getCollaborateur();
  }
}

