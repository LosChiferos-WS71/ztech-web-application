import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { PlantRecommendationsComponent } from '../../../flowerpot/components/plant-recommendations/plant-recommendations.component';
import { PlantStatusComponent } from '../../../flowerpot/components/plant-status/plant-status.component';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flowerpot-detail',
  standalone: true,
  imports: [ToolbarComponent,PlantRecommendationsComponent,PlantStatusComponent,MatIconModule],
  templateUrl: './flowerpot-detail.component.html',
  styleUrl: './flowerpot-detail.component.css'
})
export class FlowerpotDetailComponent {
  constructor(private router: Router) {}

  onBack(): void {
    this.router.navigate(['']); // Asegúrate de tener la ruta correcta
  }
//https://apexcharts.com/
}
