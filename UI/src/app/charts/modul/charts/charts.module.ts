import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemperatureAriaComponent} from "../../temperature-area/temperature-aria.component";
import {PieComponent} from "../../pie/pie.component";
import {ChartsPageComponent} from "../../../pages/charts-page/charts-page.component";
import {RouterModule} from "@angular/router";
import {HighchartsChartModule} from "highcharts-angular";
import {SecondPieComponent} from "../../second-pie/second-pie.component";




@NgModule({
  declarations: [
    TemperatureAriaComponent,
    PieComponent,
    ChartsPageComponent,
    SecondPieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ChartsPageComponent }
    ]),
    HighchartsChartModule
  ]
})
export class ChartsModule { }
