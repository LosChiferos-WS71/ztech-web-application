import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, NgApexchartsModule } from 'ng-apexcharts';
import ApexCharts from 'apexcharts'
import { ActivatedRoute } from '@angular/router';
import { FlowerpotService } from '../../services/flowerpot.service';
import { Subscription, distinctUntilChanged, switchMap, timer } from 'rxjs';
import { SensorResponse } from '../../models/flowerpot.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  colors: string[];
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-plant-condition-dashboard',
  standalone: true,
  imports: [NgApexchartsModule,MatCardModule, MatIconModule, MatListModule],
  templateUrl: './plant-condition-dashboard.component.html',
  styleUrls: ['./plant-condition-dashboard.component.css']
})
export class PlantConditionDashboardComponent implements OnInit, OnDestroy{
  chartTemperature!: ChartOptions;
  chartHumidity!: ChartOptions;
  chartSunlight!: ChartOptions;

  previousTemperatureData: SensorResponse[] = [];
  previousHumidityData: SensorResponse[] = [];
  previousSunlightData: SensorResponse[] = [];

  chartSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private flowerpotService: FlowerpotService) { }

  ngOnInit(): void {
    const flowerpotId = this.route.snapshot.paramMap.get('id');

    this.chartSubscription = timer(0, 5000).pipe(
      switchMap(() => this.flowerpotService.getTemperatureSensors(Number(flowerpotId))),
      distinctUntilChanged((prev, curr) => this.compareData(prev, curr))
    ).subscribe(data => {
      this.previousTemperatureData = data;
      this.updateTemperatureChart(data);
    });

    this.chartSubscription.add(timer(0, 5000).pipe(
      switchMap(() => this.flowerpotService.getHumiditySensors(Number(flowerpotId))),
      distinctUntilChanged((prev, curr) => this.compareData(prev, curr))
    ).subscribe(data => {
      this.previousHumidityData = data;
      this.updateHumidityChart(data);
    }));

    this.chartSubscription.add(timer(0, 5000).pipe(
      switchMap(() => this.flowerpotService.getSunlightSensors(Number(flowerpotId))),
      distinctUntilChanged((prev, curr) => this.compareData(prev, curr))
    ).subscribe(data => {
      this.previousSunlightData = data;
      this.updateSunlightChart(data);
    }));
  }

  ngOnDestroy(): void {
    if (this.chartSubscription) {
      this.chartSubscription.unsubscribe();
    }
  }

  compareData(prev: SensorResponse[], curr: SensorResponse[]): boolean {
    if (prev.length !== curr.length) {
      return false;
    }
    for (let i = 0; i < prev.length; i++) {
      if (prev[i].value !== curr[i].value || prev[i].timestamp !== curr[i].timestamp) {
        return false;
      }
    }
    return true;
  }
  
  updateTemperatureChart(data: SensorResponse[]) {
    this.chartTemperature = {
      series: [{
        name: "Temperature",
        data: data.map((sensor) => sensor.value)
      }],
      chart: {
        height: 120,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#FF4560"],
      xaxis: {
        categories: data.map((sensor) => new Date(sensor.timestamp)),
        labels: {
          formatter: (value) => {
            const date = new Date(value);
            return `${this.formatDate(date)}`;
          },
          style: {
            fontSize: '10px',
          }
        },
      }
    }
  }

  updateHumidityChart(data: SensorResponse[]) {
    this.chartHumidity = {
      series: [{
        name: "Humidity",
        data: data.map((sensor) => sensor.value)
      }],
      chart: {
        height: 120,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#00D8B6"],
      xaxis: {
        categories: data.map((sensor) => new Date(sensor.timestamp)),
        labels: {
          formatter: (value) => {
            const date = new Date(value);
            return `${this.formatDate(date)}`;
          },
          style: {
            fontSize: '10px',
          }
        }
      }
    }
  }

  updateSunlightChart(data: SensorResponse[]) {
    this.chartSunlight = {
      series: [{
        name: "Sunlight",
        data: data.map((sensor) => sensor.value)
      }],
      chart: {
        height: 120,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#FFBB44"],
      xaxis: {
        categories: data.map((sensor) => new Date(sensor.timestamp)),
        labels: {
          formatter: (value) => {
            const date = new Date(value);
            return `${this.formatDate(date)}`;
          },
          style: {
            fontSize: '10px',
          }
        }
      }
    }
  }

  formatDate(date: Date) {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${month}${day} - ${hours}:${minutes}`;
  }
}
