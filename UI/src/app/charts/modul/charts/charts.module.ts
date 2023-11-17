import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartsPageComponent} from "../../../pages/charts-page/charts-page.component";
import {RouterModule} from "@angular/router";
import {TemperatureChartComponent} from "../../temperature-chart/temperature-chart.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {RainingPieCtartComponent} from "../../raining-pie-ctart/raining-pie-ctart.component";




@NgModule({
  declarations: [
    ChartsPageComponent,
    TemperatureChartComponent,
    RainingPieCtartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ChartsPageComponent }
    ]),
    NgApexchartsModule
  ]
})
export class ChartsModule { }
