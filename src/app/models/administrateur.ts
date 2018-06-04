export class Administrateur {

     
    id: number;
    firstName: string;
    lastName: string;
    dateEmbauche: string;
    poste: string;
    grade: string;
    matricule: number;
    login: string;
    password: string;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}