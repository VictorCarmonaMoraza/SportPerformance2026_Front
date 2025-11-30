import { AfterViewInit, Component, ElementRef, input, signal, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.html',
  styleUrls: ['./chart.css']
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('chart') chartElement!: ElementRef<HTMLDivElement>;

  typeGraph = input.required<string>();

  ngAfterViewInit(): void {

    // 1. Initialize ECharts using the ViewChild reference
    const chartDom = this.chartElement.nativeElement;
    const myChart = echarts.init(chartDom);

    // 2. Configure the chart
    myChart.setOption({
      title: {
        text: 'ECharts Getting Started Example'
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: this.typeGraph(),
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
}
