import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { FlowerpotService } from '../../services/flowerpot.service';
import { FlowerpotResponse } from '../../models/flowerpot.model';
import { PlantTypeService } from '../../services/plant-type.service';
import { ParameterResponse, ParameterType } from '../../models/plant-type.model';

@Component({
  selector: 'app-card-flowerpot-metrics',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card-flowerpot-metrics.component.html',
  styleUrls: ['./card-flowerpot-metrics.component.css']
})
export class CardFlowerpotMetricsComponent implements OnInit, OnDestroy {
  @Input() flowerpotId!: number;
  @Input() plantTypeId!: number;
  flowerpot!: FlowerpotResponse;
  flowerpotSubscription!: Subscription;

  minTemperature?: ParameterResponse;
  maxTemperature?: ParameterResponse;
  minHumidity?: ParameterResponse;
  maxHumidity?: ParameterResponse;
  minSunlight?: ParameterResponse;
  maxSunlight?: ParameterResponse;

  constructor(private flowerpotService: FlowerpotService, private plantTypeService: PlantTypeService) {}

  ngOnInit() {
    this.plantTypeService.getParametersByPlantTypeId(this.plantTypeId).subscribe((data) => {
      this.minTemperature = data.find((parameter) => parameter.parameterType === ParameterType.MIN_TEMPERATURE);
      this.maxTemperature = data.find((parameter) => parameter.parameterType === ParameterType.MAX_TEMPERATURE);
      this.minHumidity = data.find((parameter) => parameter.parameterType === ParameterType.MIN_HUMIDITY);
      this.maxHumidity = data.find((parameter) => parameter.parameterType === ParameterType.MAX_HUMIDITY);
      this.minSunlight = data.find((parameter) => parameter.parameterType === ParameterType.MIN_SUNLIGHT);
      this.maxSunlight = data.find((parameter) => parameter.parameterType === ParameterType.MAX_SUNLIGHT);
    });

    this.flowerpotSubscription = timer(0, 5000).pipe(
      switchMap(() => this.flowerpotService.getFlowerpotById(this.flowerpotId))
    ).subscribe((data) => {
      this.flowerpot = data;
    });
  }

  ngOnDestroy() {
    if (this.flowerpotSubscription) {
      this.flowerpotSubscription.unsubscribe();
    }
  }

  getTemperatureClass(): string {
    if (!this.flowerpot || !this.minTemperature || !this.maxTemperature) return '';
    const temperatureValue = this.flowerpot.lastTemperature;

    if (temperatureValue < this.minTemperature.value) {
      return 'temperature-low';
    } else if (temperatureValue <= this.maxTemperature.value) {
      return 'temperature-medium';
    } else {
      return 'temperature-high';
    }
  }

  getHumidityClass(): string {
    if (!this.flowerpot || !this.minHumidity || !this.maxHumidity) return '';
    const humidityValue = this.flowerpot.lastHumidity;

    if (humidityValue < this.minHumidity.value) {
      return 'humidity-low';
    } else if (humidityValue <= this.maxHumidity.value) {
      return 'humidity-medium';
    } else {
      return 'humidity-high';
    }
  }

  getSunlightClass(): string {
    if (!this.flowerpot || !this.minSunlight || !this.maxSunlight) return '';
    const sunlightValue = this.flowerpot.lastSunlight;

    if (sunlightValue < this.minSunlight.value) {
      return 'sunlight-low';
    } else if (sunlightValue <= this.maxSunlight.value) {
      return 'sunlight-medium';
    } else {
      return 'sunlight-high';
    }
  }
}