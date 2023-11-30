import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSensorMapComponent } from './create-sensor-map.component';

describe('CreateSensorMapComponent', () => {
  let component: CreateSensorMapComponent;
  let fixture: ComponentFixture<CreateSensorMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSensorMapComponent]
    });
    fixture = TestBed.createComponent(CreateSensorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
