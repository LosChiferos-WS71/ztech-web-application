import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { PlantStatusComponent } from '../../../flowerpot/components/plant-status/plant-status.component';
import { PlantConditionDashboardComponent } from '../../../iot-solution/components/plant-condition-dashboard/plant-condition-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flowerpot-metrics',
  standalone: true,
  imports: [ToolbarComponent,PlantStatusComponent,PlantConditionDashboardComponent,MatIconModule],
  templateUrl: './flowerpot-metrics.component.html',
  styleUrl: './flowerpot-metrics.component.css'
})
export class FlowerpotMetricsComponent {
  constructor(private router: Router) {}

  onBack(): void {
    this.router.navigate(['/flowerpot/detail']); // Asegúrate de tener la ruta correcta
  }
}