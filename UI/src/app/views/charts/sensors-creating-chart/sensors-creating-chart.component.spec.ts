import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsCreatingChartComponent } from './sensors-creating-chart.component';

describe('SensorsCreatingChartComponent', () => {
  let component: SensorsCreatingChartComponent;
  let fixture: ComponentFixture<SensorsCreatingChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorsCreatingChartComponent]
    });
    fixture = TestBed.createComponent(SensorsCreatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
