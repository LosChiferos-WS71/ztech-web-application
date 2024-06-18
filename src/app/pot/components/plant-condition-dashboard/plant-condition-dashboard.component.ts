import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart } from 'ng-apexcharts';
import ApexCharts from 'apexcharts'

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
};

@Component({
  selector: 'app-plant-condition-dashboard',
  standalone: true,
  imports: [NgApexchartsModule,MatCardModule, MatIconModule, MatListModule],
  templateUrl: './plant-condition-dashboard.component.html',
  styleUrls: ['./plant-condition-dashboard.component.css']
})
export class PlantConditionDashboardComponent {
  chartTemperature: ChartOptions = {
    series: [{
      name: "Temperature",
      data: [30, 32, 33, 31, 34, 35, 36]
    }],
    chart: {
      height: 120,
      type: "line"
    },
    colors: ["#FF4560"]
  };

  chartHumidity: ChartOptions = {
    series: [{
      name: "Humidity",
      data: [45, 50, 55, 50, 65, 60, 55]
    }],
    chart: {
      height: 120,
      type: "line"
    },
    colors: ["#00D8B6"]  // Un color diferente para la humedad
  };

  chartUV: ChartOptions = {
    series: [{
      name: "UV Index",
      data: [3, 4, 5, 4, 5, 6, 7]
    }],
    chart: {
      height: 120,
      type: "line"
    },
    colors: ["#007BFF"]  // Un color diferente para UV
  };
}
