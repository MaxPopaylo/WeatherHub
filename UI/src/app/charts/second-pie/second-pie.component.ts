import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DataHandlerService} from "../../_services/data-handler.service";
import {Sensor} from "../../_model/Sensor";

@Component({
  selector: 'app-second-pie',
  templateUrl: './second-pie.component.html',
  styleUrls: ['./second-pie.component.css']
})
export class SecondPieComponent implements OnInit{

  chartOptions: {};
  highcharts = Highcharts;
  sensors: Sensor[] = [];

  data: { name: string; y: number }[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.loadSensors();
    this.updateChart(this.data);
  }

  loadSensors() {
    this.dataHandler.getSensors().subscribe(data => {
        this.sensors = data.sensors;

        this.data = this.sensors.map(sensor =>({
            name: sensor.name,
            y: sensor.dataCount
          })
        );
      }
    );

  }


  updateChart(data: { name: string; y: number }[]) {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Ratio of rainy days to non-rainy days',
        align: 'left'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Weather',
        colorByPoint: true,
        data: data
      }]
    };
  }

}
