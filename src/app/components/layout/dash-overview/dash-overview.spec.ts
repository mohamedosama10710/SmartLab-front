import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOverview } from './dash-overview';

describe('DashOverview', () => {
  let component: DashOverview;
  let fixture: ComponentFixture<DashOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(DashOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
