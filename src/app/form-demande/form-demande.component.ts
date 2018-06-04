import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Demande } from '../models/demande';
import { DemandeService } from '../services/demande/demande.service';
import {Observable} from 'rxjs/Rx';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-form-demande',
  templateUrl: './form-demande.component.html',
  styleUrls: ['./form-demande.component.css']
})
export class FormDemandeComponent implements OnInit {

   demande: Demande;
  
  formDemande = new FormGroup({
    description: new FormControl('',[Validators.required]),
    dateDebut: new FormControl([Validators.required]),
    dateFin: new FormControl([Validators.required]),
    nombreJours: new FormControl(null,[Validators.required])
  });

  constructor(private demandeService : DemandeService, public snackBar: MatSnackBar ) { }

  ngOnInit() {
  }
  
  //Méthode pour envoer un nouvel enregistrement
  createDemande(formDemande : any){
    this.demande= new Demande(formDemande);
    console.log(this.demande);
    this.demandeService.createDemande(this.demande).subscribe();
  }

  popUpOk(message: string, action='Succès' ) {
    this.snackBar.open( 'La demande : ' +message+ ' est envoyée !', action, {
      duration: 2000,
    });
  }


}
