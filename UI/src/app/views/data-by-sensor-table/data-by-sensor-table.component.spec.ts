import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBySensorTableComponent } from './data-by-sensor-table.component';

describe('DataBySensorTableComponent', () => {
  let component: DataBySensorTableComponent;
  let fixture: ComponentFixture<DataBySensorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBySensorTableComponent]
    });
    fixture = TestBed.createComponent(DataBySensorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
