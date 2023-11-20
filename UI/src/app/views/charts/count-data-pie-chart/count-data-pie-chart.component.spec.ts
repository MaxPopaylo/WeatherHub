import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDataPieChartComponent } from './count-data-pie-chart.component';

describe('CountDataPieChartComponent', () => {
  let component: CountDataPieChartComponent;
  let fixture: ComponentFixture<CountDataPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountDataPieChartComponent]
    });
    fixture = TestBed.createComponent(CountDataPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
