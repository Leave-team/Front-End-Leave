import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCollaborateurComponent } from './from-collaborateur.component';

describe('FromCollaborateurComponent', () => {
  let component: FromCollaborateurComponent;
  let fixture: ComponentFixture<FromCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
