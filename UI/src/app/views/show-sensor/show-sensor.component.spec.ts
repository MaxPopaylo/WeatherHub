import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSensorComponent } from './show-sensor.component';

describe('ShowSensorComponent', () => {
  let component: ShowSensorComponent;
  let fixture: ComponentFixture<ShowSensorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSensorComponent]
    });
    fixture = TestBed.createComponent(ShowSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
