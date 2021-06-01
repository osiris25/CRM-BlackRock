import { Component, OnInit } from '@angular/core';
import { IBarChart } from '../../line-charts/chats.interface';
import { DATA_PIE } from '../../line-charts/data-chart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
	data: IBarChart[]=[];
  view: [number,number] = [400, 300];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#FE4021', '#FFCE00', '#FC9BB3', '#000000']
  };

  constructor() {
  }
ngOnInit(): void {
	this.data=DATA_PIE;
  }

}
