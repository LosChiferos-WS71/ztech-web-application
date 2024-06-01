import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Flowerpot {
  id: string;
  name: string;
  image: string;
  temperatureValue: number;
  humidityValue: number;
  sunlightValue: number;
}

@Component({
  selector: 'app-card-flowerpot',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './card-flowerpot.component.html',
  styleUrl: './card-flowerpot.component.css'
})
export class CardFlowerpotComponent {
  @Input() flowerpot!: Flowerpot;

  constructor(private router: Router) {
  }

  navigateToDetail() {
    this.router.navigate(['/flowerpot/detail']);
  }

  getTemperatureClass(): string {
    const value = this.flowerpot.temperatureValue;
    if (value < 15) {
      return 'temperature-low';
    } else if (value >= 15 && value <= 25) {
      return 'temperature-medium';
    } else {
      return 'temperature-high';
    }
  }

  getHumidityClass(): string {
    const value = this.flowerpot.humidityValue;
    if (value < 30) {
      return 'humidity-low';
    } else if (value >= 30 && value <= 60) {
      return 'humidity-medium';
    } else {
      return 'humidity-high';
    }
  }

  getSunlightClass(): string {
    const value = this.flowerpot.sunlightValue;
    if (value < 30) {
      return 'sunlight-low';
    } else if (value >= 30 && value <= 70) {
      return 'sunlight-medium';
    } else {
      return 'sunlight-high';
    }
  }
}
