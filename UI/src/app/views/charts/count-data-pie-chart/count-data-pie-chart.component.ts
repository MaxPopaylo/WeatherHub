import {Component, ViewChild} from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions, ChartComponent
} from "ng-apexcharts";
import {DataHandlerService} from "../../../_services/data-handler.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fill: ApexFill,
  yaxis: ApexYAxis,
  stroke: ApexStroke,
  legend: ApexLegend,
  plotOptions: ApexPlotOptions
};
@Component({
  selector: 'app-count-data-pie-chart',
  templateUrl: './count-data-pie-chart.component.html',
  styleUrls: ['./count-data-pie-chart.component.css']
})
export class CountDataPieChartComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  amount: any[];
  names: any[];

  constructor(public dataHandler: DataHandlerService) {
    this.loadData();
  }

  loadData(): void {
    this.dataHandler.getSensorsCountData().subscribe(ct => {
      this.amount = ct.map(data => data.amount);
      this.names = ct.map(data => data.sensor.name);

      this.initChart(this.amount, this.names);
    });
  }

  initChart(amount: any[], names: any[]): void {
    this.chartOptions = {
      series: amount,
      chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: names,
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          }
        }
      },
      theme: {
        monochrome: {
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      }
    };
  }

}
