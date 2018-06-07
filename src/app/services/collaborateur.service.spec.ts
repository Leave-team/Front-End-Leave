import { TestBed, inject } from '@angular/core/testing';

import { CollaborateurService } from './collaborateur.service';

describe('CollaborateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaborateurService]
    });
  });

  it('should be created', inject([CollaborateurService], (service: CollaborateurService) => {
    expect(service).toBeTruthy();
  }));
});
