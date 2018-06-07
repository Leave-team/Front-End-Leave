import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Demande } from '../models/demande';
import { DemandeService } from '../services/demande/demande.service';
import {Observable} from 'rxjs/Rx';
import {MatSnackBar} from '@angular/material';
import { NavbarService } from '../services/navbar/navbar.service';

@Component({
  selector: 'app-form-demande',
  templateUrl: './form-demande.component.html',
  styleUrls: ['./form-demande.component.css']
})
export class FormDemandeComponent implements OnInit {

  demande: Demande;
  
   date = new FormControl(new Date());


   filtreWekend = (d: Date): boolean => {
    const day = d.getDay();
    // Eviter les jours du weekend
    return day !== 0 && day !== 6;
  }

  formDemande = new FormGroup({
    description: new FormControl('',[Validators.required]),
    dateDebut: new FormControl([Validators.required]),
    dateFin: new FormControl([Validators.required]),
    nombreJours: new FormControl(null, [Validators.required])
  });

  constructor(private demandeService : DemandeService, public snackBar: MatSnackBar, public nav : NavbarService ) { }

  
  ngOnInit() {
    this.nav.show();
  }
  

  //Méthode pour envoer un nouvel enregistrement
  createDemande(formDemande : any){
    this.demande= new Demande(formDemande);
    console.log(this.demande);
    this.demandeService.createDemande(this.demande).subscribe();
  }



  calculateDays(): number{

    let nbdays : number;;
    nbdays = Math.ceil((this.formDemande.controls.dateFin.value - this.formDemande.controls.dateDebut.value)/84600000);
    return nbdays
  }




  popUpOk(message: string, action='Succès' ) {
    this.snackBar.open( 'La demande : ' +message+ ' est envoyée !', action, {
      duration: 2000,
    });
  }


}
