import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import { Chart } from 'highcharts';
import { donutChart } from './helpers/donutChart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  donutChart = new Chart(donutChart);
}
