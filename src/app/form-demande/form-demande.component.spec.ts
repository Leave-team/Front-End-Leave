import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemandeComponent } from './form-demande.component';

describe('FormDemandeComponent', () => {
  let component: FormDemandeComponent;
  let fixture: ComponentFixture<FormDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
