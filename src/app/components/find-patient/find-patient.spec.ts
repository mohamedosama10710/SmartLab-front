import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPatient } from './find-patient';

describe('FindPatient', () => {
  let component: FindPatient;
  let fixture: ComponentFixture<FindPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindPatient],
    }).compileComponents();

    fixture = TestBed.createComponent(FindPatient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
