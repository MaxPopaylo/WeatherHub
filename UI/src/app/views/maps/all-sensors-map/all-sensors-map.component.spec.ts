import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSensorsMapComponent } from './all-sensors-map.component';

describe('AllSensorsMapComponent', () => {
  let component: AllSensorsMapComponent;
  let fixture: ComponentFixture<AllSensorsMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSensorsMapComponent]
    });
    fixture = TestBed.createComponent(AllSensorsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
