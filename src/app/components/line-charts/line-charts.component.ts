import { Component, OnInit } from '@angular/core';
import { IBarChart } from './chats.interface';
import { DATA_BAR } from './data-chart';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css']
})
export class LineChartsComponent implements OnInit {
	data:IBarChart[] =[];

  view:[number,number] = [400, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'PROMOTOR';
  showYAxisLabel = true;
  yAxisLabel = 'NÚMERO DE TÍTULOS VENDIDOS';

  colorScheme = {
    domain: ['#FE4021', '#FFCE00', '#FC9BB3', '#000000']
  };
  constructor() { }

  ngOnInit(): void {
	this.data=DATA_BAR;
  }

}
