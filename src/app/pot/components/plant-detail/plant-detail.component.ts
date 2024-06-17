import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ParameterResponse, ParameterType, PlantTypeDetailsResponse } from '../../models/plant-type.model';
import { PlantTypeService } from '../../services/plant-type.service';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {
  plantTypeDetail!: PlantTypeDetailsResponse;

  minTemperature!: ParameterResponse | undefined;
  maxTemperature!: ParameterResponse | undefined;
  minHumidity!: ParameterResponse | undefined;
  maxHumidity!: ParameterResponse | undefined;
  minSunlight!: ParameterResponse | undefined;
  maxSunlight!: ParameterResponse | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private plantTypeService: PlantTypeService) {}

  ngOnInit() {
    const plantId = this.route.snapshot.paramMap.get('id');
    this.plantTypeService.getPlantTypeDetails(Number(plantId)).subscribe(
      (data) => {
        this.plantTypeDetail = data;
        this.groupParameters();
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/plant/view']);
  }

  groupParameters(): void {
    this.minTemperature = this.plantTypeDetail.parameters.find(param => param.parameterType === ParameterType.MIN_TEMPERATURE);
    this.maxTemperature = this.plantTypeDetail.parameters.find(param => param.parameterType === ParameterType.MAX_TEMPERATURE);
    this.minHumidity = this.plantTypeDetail.parameters.find(param => param.parameterType === ParameterType.MIN_HUMIDITY);
    this.maxHumidity = this.plantTypeDetail.parameters.find(param => param.parameterType === ParameterType.MAX_HUMIDITY);
    this.minSunlight = this.plantTypeDetail.parameters.find(param => param.parameterType === ParameterType.MIN_SUNLIGHT);
    this.maxSunlight = this.plantTypeDetail.parameters.find(param => param.parameterType === ParameterType.MAX_SUNLIGHT);
  }
}