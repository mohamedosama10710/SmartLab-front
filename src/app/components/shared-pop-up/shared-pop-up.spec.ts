import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPopUp } from './shared-pop-up';

describe('SharedPopUp', () => {
  let component: SharedPopUp;
  let fixture: ComponentFixture<SharedPopUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedPopUp],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedPopUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
