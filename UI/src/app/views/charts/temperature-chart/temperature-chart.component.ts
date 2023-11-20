import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../../_services/data-handler.service";
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: any; //ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  grid: any; //ApexGrid;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent {

  temperatureSeries: number[][];
  humiditySeries: number[][];
  atmosphericPressureSeries: number[][];

  constructor(public dataHandler: DataHandlerService) {
    this.loadData();
  }

  loadData(): void {
    this.dataHandler.getWeatherAllData().subscribe(wd => {
      this.temperatureSeries = wd.map(data => [new Date(data.date).getTime(), data.temperature]);
      this.humiditySeries = wd.map(data => [new Date(data.date).getTime(), data.humidity]);
      this.atmosphericPressureSeries = wd.map(data => [new Date(data.date).getTime(), data.atmosphericPressure]);

      this.initCharts();
    });
  }


  public chart1options: Partial<ChartOptions>;
  public chart2options: Partial<ChartOptions>;
  public chart3options: Partial<ChartOptions>;

  public commonOptions: Partial<ChartOptions> = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    toolbar: {
      tools: {
        selection: false
      }
    },
    markers: {
      size: 6,
      hover: {
        size: 10
      }
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        title: {
          formatter: function() {
            return "";
          }
        }
      }
    },
    grid: {
      clipMarkers: false
    },
    xaxis: {
      type: "datetime"
    }
  };

  public initCharts(): void {
    this.chart1options = {
      series: [
        {
          name: "Temperature",
          data: this.temperatureSeries,
        }
      ],
      chart: {
        id: "fb",
        group: "social",
        type: "line",
        height: 160
      },
      colors: ["#008FFB"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };

    this.chart2options = {
      series: [
        {
          name: "Humidity",
          data: this.humiditySeries,
        }
      ],
      chart: {
        id: "tw",
        group: "social",
        type: "line",
        height: 160
      },
      colors: ["#546E7A"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };

    this.chart3options = {
      series: [
        {
          name: "Atmospheric Pressure",
          data: this.atmosphericPressureSeries,
        }
      ],
      chart: {
        id: "yt",
        group: "social",
        type: "area",
        height: 160
      },
      colors: ["#00E396"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };
  }


}
