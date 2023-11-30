import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSensorsMapPageComponent } from './all-sensors-map-page.component';

describe('AllSensorsMapPageComponent', () => {
  let component: AllSensorsMapPageComponent;
  let fixture: ComponentFixture<AllSensorsMapPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSensorsMapPageComponent]
    });
    fixture = TestBed.createComponent(AllSensorsMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
