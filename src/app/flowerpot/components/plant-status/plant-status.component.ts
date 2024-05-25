import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-plant-status',
  standalone: true,
  imports: [MatCardModule,MatIconModule,CommonModule],
  templateUrl: './plant-status.component.html',
  styleUrl: './plant-status.component.css'
})
export class PlantStatusComponent {
  values = {
    temperature: 30,
    humidity: 75,
    uv: 55
  };

  getColor(value: number): string {
    if (value >= 70) {
      return 'green';
    } else if (value >= 50) {
      return 'red';
    } else {
      return 'black';
    }
  }
}
