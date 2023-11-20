import {Component, ViewChild} from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill, ChartComponent
} from "ng-apexcharts";
import {DataHandlerService} from "../../../_services/data-handler.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-raining-pie-ctart',
  templateUrl: './raining-pie-ctart.component.html',
  styleUrls: ['./raining-pie-ctart.component.css']
})
export class RainingPieCtartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  rainingData: number;
  notRainingData: number;

  constructor(public dataHandler: DataHandlerService) {
    this.loadData();
  }

  loadData(): void {
    this.dataHandler.countData$.subscribe(data => {
      this.rainingData = data.rainingDayCount;
      this.notRainingData = data.notRainingDayCount;

      this.initChart(this.rainingData, this.notRainingData);
    });
  }


  initChart(rainingData: number, notRainingData: number): void {
    this.chartOptions = {
      series: [rainingData, notRainingData],
      chart: {
        type: "donut"
      },
      labels: ["Raining Data", "Not Raining Data"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
