import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CollaborateurService } from '../services/collaborateur.service';
import { Collaborateur } from '../models/collaborateur';
@Component({
  selector: 'app-from-collaborateur',
  templateUrl: './from-collaborateur.component.html',
  styleUrls: ['./from-collaborateur.component.css']
})
export class FromCollaborateurComponent implements OnInit {

  collaborateur: Collaborateur;
  constructor(private collaborateurService: CollaborateurService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.collaborateur = new Collaborateur(form.value);
    console.log(this.collaborateur);
    this.collaborateurService.createCollaborateur(this.collaborateur).subscribe();
  }
}
