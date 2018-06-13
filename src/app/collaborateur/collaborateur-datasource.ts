
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { Collaborateur } from '../models/collaborateur';
import { CollaborateurService } from '../services/collaborateur.service';
import { BehaviorSubject, Observable } from 'rxjs';

export class CollaborateurDataSource implements DataSource<Collaborateur> {

    private CollaborateurSubject = new BehaviorSubject<Collaborateur[]>([]);

    constructor(private collaborateurService: CollaborateurService) {}

    connect(collectionViewer: CollectionViewer): Observable<Collaborateur[]> {
        return this.CollaborateurSubject.asObservable();
    }


    disconnect(collectionViewer: CollectionViewer): void {
this.CollaborateurSubject.complete();
    }
    loadCollabs() {
              this.collaborateurService.getCollaborateur().subscribe(collabs => this.CollaborateurSubject.next(collabs));
    }
}
