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

  // typeGraph = input.required<string>();
  // data = input.required<string[]>();
  // dataSerie = input.required<number[]>();
  options = input.required<echarts.EChartsOption>();

  ngAfterViewInit(): void {

    // 1. Initialize ECharts using the ViewChild reference
    const chartDom = this.chartElement.nativeElement;
    const myChart = echarts.init(chartDom);

    myChart.setOption(this.options())
  }
}
