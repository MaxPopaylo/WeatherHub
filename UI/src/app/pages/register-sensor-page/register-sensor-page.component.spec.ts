import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSensorPageComponent } from './register-sensor-page.component';

describe('RegisterSensorPageComponent', () => {
  let component: RegisterSensorPageComponent;
  let fixture: ComponentFixture<RegisterSensorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSensorPageComponent]
    });
    fixture = TestBed.createComponent(RegisterSensorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
