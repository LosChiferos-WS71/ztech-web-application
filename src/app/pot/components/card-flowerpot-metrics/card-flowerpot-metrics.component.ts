import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { FlowerpotService } from '../../services/flowerpot.service';
import { FlowerpotResponse } from '../../models/flowerpot.model';

@Component({
  selector: 'app-card-flowerpot-metrics',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card-flowerpot-metrics.component.html',
  styleUrl: './card-flowerpot-metrics.component.css'
})
export class CardFlowerpotMetricsComponent implements OnInit{
  @Input() flowerpotId!: number;
  flowerpot!: FlowerpotResponse;

  constructor(private flowerpotService: FlowerpotService) {}

  ngOnInit() {
    this.flowerpotService.getFlowerpotById(this.flowerpotId).subscribe((data) => {
      this.flowerpot = data;
    });
  }

  getTemperatureClass(): string {
    const value = this.flowerpot.lastTemprature;
    if (value < 15) {
      return 'temperature-low';
    } else if (value >= 15 && value <= 25) {
      return 'temperature-medium';
    } else {
      return 'temperature-high';
    }
  }

  getHumidityClass(): string {
    const value = this.flowerpot.lastHumidity;
    if (value < 30) {
      return 'humidity-low';
    } else if (value >= 30 && value <= 60) {
      return 'humidity-medium';
    } else {
      return 'humidity-high';
    }
  }

  getSunlightClass(): string {
    const value = this.flowerpot.lastHumidity;
    if (value < 30) {
      return 'sunlight-low';
    } else if (value >= 30 && value <= 70) {
      return 'sunlight-medium';
    } else {
      return 'sunlight-high';
    }
  }
}
