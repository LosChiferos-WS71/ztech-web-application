import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plant-recommendations',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatListModule],
  templateUrl: './plant-recommendations.component.html',
  styleUrl: './plant-recommendations.component.css'
})
export class PlantRecommendationsComponent {
  constructor(private router: Router) { }

  navigateMetrics():void{
    this.router.navigate(['/flowerpot-metrics']);
  }
}
