import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-temperature-aria',
  templateUrl: './temperature-aria.component.html',
  styleUrls: ['./temperature-aria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureAriaComponent implements OnInit{

  chartOptions: {};
  highcharts = Highcharts;
  incrementNumber: number;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
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
         data:  this.dataHandler.getWeatherData().map(data => [data.date.getFullYear(), data.value])
      }]
    };
  }

}
