import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { FlowerpotAssignmentResponse } from '../../../loan/models/flowerpot-assignment.model';
import { FlowerpotResponse } from '../../models/flowerpot.model';
import { ParameterResponse, ParameterType } from '../../models/plant-type.model';
import { FlowerpotAssignmentService } from '../../../loan/services/flowerpot-assignment.service';
import { FlowerpotService } from '../../services/flowerpot.service';
import { PlantTypeService } from '../../services/plant-type.service';
import { Subscription, switchMap, timer } from 'rxjs';
@Component({
  selector: 'app-plant-status',
  standalone: true,
  imports: [MatCardModule,MatIconModule,CommonModule],
  templateUrl: './plant-status.component.html',
  styleUrl: './plant-status.component.css'
})
export class PlantStatusComponent implements OnInit, OnDestroy{
  flowerpotAssignment!: FlowerpotAssignmentResponse;
  flowerpot!: FlowerpotResponse;
  flowerpotSubscription!: Subscription;

  minTemperature?: ParameterResponse;
  maxTemperature?: ParameterResponse;
  minHumidity?: ParameterResponse;
  maxHumidity?: ParameterResponse;
  minSunlight?: ParameterResponse;
  maxSunlight?: ParameterResponse;

  temperatureIndicator: string = '';
  humidityIndicator: string = '';
  sunlightIndicator: string = '';

  constructor(private route: ActivatedRoute, private flowerpotAssignmentService: FlowerpotAssignmentService, private flowerpotService: FlowerpotService, private plantTypeService: PlantTypeService) {}

  ngOnInit(): void {
    const flowerpotId = this.route.snapshot.paramMap.get('id');
    this.flowerpotAssignmentService.getFlowerpotAssignmentByFlowerpotId(Number(flowerpotId)).subscribe(
      (data) => {
        this.flowerpotAssignment = data;
        this.plantTypeService.getParametersByPlantTypeId(this.flowerpotAssignment.plantTypeId).subscribe((data) => {
          this.minTemperature = data.find((parameter) => parameter.parameterType === ParameterType.MIN_TEMPERATURE);
          this.maxTemperature = data.find((parameter) => parameter.parameterType === ParameterType.MAX_TEMPERATURE);
          this.minHumidity = data.find((parameter) => parameter.parameterType === ParameterType.MIN_HUMIDITY);
          this.maxHumidity = data.find((parameter) => parameter.parameterType === ParameterType.MAX_HUMIDITY);
          this.minSunlight = data.find((parameter) => parameter.parameterType === ParameterType.MIN_SUNLIGHT);
          this.maxSunlight = data.find((parameter) => parameter.parameterType === ParameterType.MAX_SUNLIGHT);
        });
      },
      (error) => {
        console.log('Error: ', error);
      }
    );

    this.flowerpotSubscription = timer(0, 5000).pipe(
      switchMap(() => this.flowerpotService.getFlowerpotById(Number(flowerpotId)))
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
      this.temperatureIndicator = 'Low';
      return '#428BCA';
    } else if (temperatureValue <= this.maxTemperature.value) {
      this.temperatureIndicator = 'Normal';
      return '#5CAB5F';
    } else {
      this.temperatureIndicator = 'High';
      return '#D14949';
    }
  }

  getHumidityClass(): string {
    if (!this.flowerpot || !this.minHumidity || !this.maxHumidity) return '';
    const humidityValue = this.flowerpot.lastHumidity;

    if (humidityValue < this.minHumidity.value) {
      this.humidityIndicator = 'Low';
      return '#428BCA';
    } else if (humidityValue <= this.maxHumidity.value) {
      this.humidityIndicator = 'Normal';
      return '#5CAB5F';
    } else {
      this.humidityIndicator = 'High';
      return '#D14949';
    }
  }

  getSunlightClass(): string {
    if (!this.flowerpot || !this.minSunlight || !this.maxSunlight) return '';
    const sunlightValue = this.flowerpot.lastSunlight;

    if (sunlightValue < this.minSunlight.value) {
      this.sunlightIndicator = 'Low';
      return '#428BCA';
    } else if (sunlightValue <= this.maxSunlight.value) {
      this.sunlightIndicator = 'Normal';
      return '#5CAB5F';
    } else {
      this.sunlightIndicator = 'High';
      return '#D14949';
    }
  }
}
