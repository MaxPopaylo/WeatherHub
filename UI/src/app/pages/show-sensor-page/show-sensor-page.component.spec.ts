import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSensorPageComponent } from './show-sensor-page.component';

describe('ShowSensorPageComponent', () => {
  let component: ShowSensorPageComponent;
  let fixture: ComponentFixture<ShowSensorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSensorPageComponent]
    });
    fixture = TestBed.createComponent(ShowSensorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
