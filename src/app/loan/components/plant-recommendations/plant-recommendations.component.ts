import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowerpotAssignmentService } from '../../services/flowerpot-assignment.service';
import { FlowerpotService } from '../../../pot/services/flowerpot.service';
import { PlantTypeService } from '../../../pot/services/plant-type.service';
import { FlowerpotResponse } from '../../../pot/models/flowerpot.model';
import { ParameterResponse, ParameterType } from '../../../pot/models/plant-type.model';
import { FlowerpotAssignmentResponse } from '../../models/flowerpot-assignment.model';
import { Subscription, switchMap, timer } from 'rxjs';
@Component({
  selector: 'app-plant-recommendations',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatIconModule,MatListModule],
  templateUrl: './plant-recommendations.component.html',
  styleUrl: './plant-recommendations.component.css'
})
export class PlantRecommendationsComponent implements OnInit, OnDestroy{
  flowerpotAssignment!: FlowerpotAssignmentResponse;
  flowerpot!: FlowerpotResponse;
  flowerpotSubscription!: Subscription;

  minTemperature?: ParameterResponse;
  maxTemperature?: ParameterResponse;
  minHumidity?: ParameterResponse;
  maxHumidity?: ParameterResponse;
  minSunlight?: ParameterResponse;
  maxSunlight?: ParameterResponse;

  constructor(private route: ActivatedRoute, private router: Router, private flowerpotAssignmentService: FlowerpotAssignmentService, private flowerpotService: FlowerpotService, private plantTypeService: PlantTypeService) { }

  ngOnInit(): void {
    const flowerpotId = this.route.snapshot.paramMap.get('id');
    this.flowerpotAssignmentService.getFlowerpotAssignmentByFlowerpotId(Number(flowerpotId)).subscribe(
      (data) => {
        this.flowerpotAssignment = data;
        this.plantTypeService.getParametersByPlantTypeId(data.plantTypeId).subscribe((data) => {
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

  getTemperatureRecommendation(): {value: string, style: string} {
    if (!this.flowerpot || !this.minTemperature || !this.maxTemperature) return {value: '', style: ''};
    const temperatureValue = this.flowerpot.lastTemperature;

    if (temperatureValue < this.minTemperature.value) {
      return {
        value: "Control the temperature of your plant's environment. Keep the pot in a warmer place and protected from cold drafts.",
        style: 'low-recommendation'
      };
    } else if (temperatureValue <= this.maxTemperature.value) {
      return {
        value: "The temperature is right for your plant. Keep the pot in its current location to ensure optimal growth.",
        style: 'normal-recommendation'
      };
    } else {
      return {
        value: "The temperature is very high. Move your plant to a cooler, shady location to avoid overheating.",
        style: 'high-recommendation'
      };
    }
  }

  getHumidityRecommendation(): {value: string, style: string} {
    if (!this.flowerpot || !this.minHumidity || !this.maxHumidity) return {value: '', style: ''};
    const humidityValue = this.flowerpot.lastHumidity;

    if (humidityValue < this.minHumidity.value) {
      return {
        value: "The humidity is low. Mist your plant's leaves with water regularly to increase humidity and keep it healthy.",
        style: 'low-recommendation'
      };
    } else if (humidityValue <= this.maxHumidity.value) {
      return {
        value: "Humidity is ideal. Continue watering your plant as needed to maintain this humidity level.",
        style: 'normal-recommendation'
      };
    } else {
      return {
        value: "The humidity is very high. Make sure the pot has good drainage to prevent the roots from rotting.",
        style: 'high-recommendation'
      };
    }
  }

  getSunlightRecommendation(): {value: string, style: string} {
    if (!this.flowerpot || !this.minSunlight || !this.maxSunlight) return {value: '', style: ''};
    const sunlightValue = this.flowerpot.lastSunlight;

    if (sunlightValue < this.minSunlight.value) {
      return {
        value: "Light exposure is insufficient. Move your plant to a brighter location, but avoid direct sunlight.",
        style: 'low-recommendation'
      };
    } else if (sunlightValue <= this.maxSunlight.value) {
      return {
        value: "Light exposure is adequate. Keep your plant in its current location to ensure optimal growth.",
        style: 'normal-recommendation'
      };
    } else {
      return {
        value: "Exposure to light is excessive. Protect your plant from direct sunlight during the most intense hours of the day.",
        style: 'high-recommendation'
      };
    }
  }

  navigateMetrics():void{
    this.router.navigate(['/flowerpot/metrics', this.route.snapshot.paramMap.get('id')]);
  }

  changePlant():void{
    this.router.navigate(['/choose/plant']);
  }
}