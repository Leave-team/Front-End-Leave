import { TestBed, inject } from '@angular/core/testing';

import { DemandeService } from './demande.service';

describe('DemandeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandeService]
    });
  });

  it('should be created', inject([DemandeService], (service: DemandeService) => {
    expect(service).toBeTruthy();
  }));
});
