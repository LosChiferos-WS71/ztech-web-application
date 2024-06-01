import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

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
  @Input() plant!: Plant;

  constructor(private router: Router) {}  // Inyectar Router en el constructor

  navigateToDetail() {
    this.router.navigate(['/plant/detail', this.plant.id]);  // Navegación usando el ID de la planta
  }
}
