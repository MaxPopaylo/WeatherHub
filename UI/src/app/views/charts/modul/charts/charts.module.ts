import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartsPageComponent} from "../../../../pages/charts-page/charts-page.component";
import {RouterModule} from "@angular/router";
import {TemperatureChartComponent} from "../../temperature-chart/temperature-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {RainingPieCtartComponent} from "../../raining-pie-ctart/raining-pie-ctart.component";
import {CountDataPieChartComponent} from "../../count-data-pie-chart/count-data-pie-chart.component";
import {SensorsCreatingChartComponent} from "../../sensors-creating-chart/sensors-creating-chart.component";




@NgModule({
  declarations: [
    ChartsPageComponent,
    TemperatureChartComponent,
    RainingPieCtartComponent,
    CountDataPieChartComponent,
    SensorsCreatingChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ChartsPageComponent}
    ]),
    NgApexchartsModule
  ]
})
export class ChartsModule { }
