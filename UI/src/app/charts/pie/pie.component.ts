import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieComponent implements OnInit{

  chartOptions: {};
  highcharts = Highcharts;


  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
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
        data: [{
          name: 'Rainy Day',
          // y: this.dataHandler.getCountData().rainingDayCount,TODO
          y: 5,
          sliced: true,
          selected: true
        },  {
          name: 'Not rainy Day',
          // y: this.dataHandler.getCountData().notRainingDayCount TODO
          y: 8
        }]
      }]
    };
  }

}


