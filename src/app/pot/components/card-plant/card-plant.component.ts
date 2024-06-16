import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { PlantTypeResponse } from '../../models/plant-type.model';

interface Plant {
  id: string;  // Asegúrate de que la interfaz Plant tiene un 'id' para la navegación
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-card-plant',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.css']
})
export class CardPlantComponent {
  @Input() plantType!: PlantTypeResponse;

  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/plant/detail', this.plantType.id]);
  }
}
