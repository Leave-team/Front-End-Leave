export class Demande {

     
     id: number;
     description: string;
     dateDebut: string;
     dateFin: string;
     nombreJours: number;
     decision: string;
     motifRefus: string;
     idVal: number;
     idAdmin: number;

     constructor (values: Object = {}) {
         Object.assign(this, values);
     }
}