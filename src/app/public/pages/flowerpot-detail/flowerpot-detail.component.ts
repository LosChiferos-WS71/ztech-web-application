import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { PlantRecommendationsComponent } from '../../../flowerpot/plant-recommendations/plant-recommendations.component';
import { PlantStatusComponent } from '../../../flowerpot/plant-status/plant-status.component';
@Component({
  selector: 'app-flowerpot-detail',
  standalone: true,
  imports: [ToolbarComponent,PlantRecommendationsComponent,PlantStatusComponent],
  templateUrl: './flowerpot-detail.component.html',
  styleUrl: './flowerpot-detail.component.css'
})
export class FlowerpotDetailComponent {
//https://apexcharts.com/
}
