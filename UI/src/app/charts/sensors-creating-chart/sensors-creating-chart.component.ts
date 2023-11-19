import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexGrid
} from "ng-apexcharts";
import { DataHandlerService } from "../../_services/data-handler.service";
import { Sensor } from "../../_model/sensors/Sensor";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  fill: ApexFill;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};

@Component({
  selector: 'app-sensors-creating-chart',
  templateUrl: './sensors-creating-chart.component.html',
  styleUrls: ['./sensors-creating-chart.component.css']
})
export class SensorsCreatingChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(public dataHandler: DataHandlerService) {
    this.loadData();
  }

  loadData(): void {
    this.dataHandler.getAllSensors().subscribe((sensors: Sensor[]) => {
      this.initChart(sensors);
    });
  }

  initChart(sensors: Sensor[]): void {
    const seriesData = sensors.map((sensor: Sensor) => {
      const deleteDate = new Date(sensor.deleteDate).getTime() === 0 ? new Date().getTime() : new Date(sensor.deleteDate).getTime();
      return {
        x: sensor.name,
        y: [new Date(sensor.creationDate).getTime(), deleteDate],
      };
    });

    this.chartOptions = {
      series: [
        {
          data: seriesData
        }
      ],
      chart: {
        height: 390,
        type: 'rangeBar',
        zoom: {
          enabled: false
        }
      },
      colors: ['#EC7D31', '#36BDCB'],
      plotOptions: {
        bar: {
          horizontal: true,
          isDumbbell: true,
          dumbbellColors: [['#EC7D31', '#36BDCB']]
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Creation Time', 'Delete Time']
      },
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#36BDCB'],
          inverseColors: false,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        labels: {
          offsetY: 5,
        }
      },
      xaxis: {
        type: "datetime",
      }
    };
  }
}
