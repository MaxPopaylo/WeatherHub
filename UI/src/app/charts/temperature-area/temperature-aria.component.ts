import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DataHandlerService} from "../../_services/data-handler.service";
import {WeatherData} from "../../_model/WeatherData";

@Component({
  selector: 'app-temperature-aria',
  templateUrl: './temperature-aria.component.html',
  styleUrls: ['./temperature-aria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureAriaComponent implements OnInit{

  chartOptions: {};
  highcharts = Highcharts;
  weatherData?: WeatherData[];
  data: number[][];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.loadSensors();
    this.updateChart(this.data);
  }

  loadSensors() {
    this.dataHandler.getWeatherData().subscribe(data => {
        this.weatherData = data.data;
        console.log(this.weatherData);
        this.data = this.weatherData.map(data => [data.date.getTime(), data.value]);
      }
    );

  }

  updateChart(data: number[][]){
    this.chartOptions = {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'Temperature exchange rate over time',
        align: 'left'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in',
        align: 'left'
      },
      xAxis: {
        type: 'date'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'Temperature',
         data: data
      }]
    };
  }

}
