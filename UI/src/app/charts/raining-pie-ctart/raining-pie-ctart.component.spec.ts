import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainingPieCtartComponent } from './raining-pie-ctart.component';

describe('RainingPieCtartComponent', () => {
  let component: RainingPieCtartComponent;
  let fixture: ComponentFixture<RainingPieCtartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainingPieCtartComponent]
    });
    fixture = TestBed.createComponent(RainingPieCtartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
