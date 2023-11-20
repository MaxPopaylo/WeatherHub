import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import {DataHandlerService} from "../../_services/data-handler.service";

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.css']
})
export class ChartsPageComponent {
  dataAmount: number = 0;
  chartOptions: Partial<ApexOptions>;

  constructor(private dataHandler: DataHandlerService) {
    this.loadData();
  }

  initChart(countData: number) {
  this.chartOptions = {
      chart: {
        id: 'sparkline1',
        group: 'sparklines',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        opacity: 1,
      },
      series: [{
        name: 'DataCount',
        data: this.generateChart(this.dataAmount)
      }],
      yaxis: {
        min: 0
      },
      xaxis: {
        type: 'datetime',
      },
      colors: ['#008FFB'],
      title: {
        text: `${this.dataAmount.toLocaleString()}`,
        offsetX: 30,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'DataCount',
        offsetX: 30,
        style: {
          fontSize: '14px',
        }
      }
    };
  }

  loadData(): void {
    this.dataHandler.countData$.subscribe(data => {
      this.dataAmount = data.valueCount;
      this.initChart(this.dataAmount);
    });
  }

  private generateChart(dataAmount: number): Array<[number, number]> {
    const data: Array<[number, number]> = [];

    for (let i = 1; i <= 24; i++) {
      const timestamp = new Date(`2018-09-01T${i.toString().padStart(2, '0')}:00:00`).getTime();
      const value = Math.floor(Math.random() * dataAmount) + 1;
      data.push([timestamp, value]);
    }

    return data;
  }
}
