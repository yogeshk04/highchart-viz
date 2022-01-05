import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import { Chart } from 'highcharts';
import { donutChart } from './helpers/donutChart';
import { areaChart } from './helpers/areaChart';
import { barChart } from './helpers/barChart';
import { oneLineChart } from './helpers/oneLineChart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  donutChart = new Chart(donutChart);
  areaChart = new Chart(areaChart);
  barChart = new Chart(barChart);
  oneLineChart = new Chart(oneLineChart);
}
