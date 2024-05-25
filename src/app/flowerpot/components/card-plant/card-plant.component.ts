import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface Plant {
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
  @Input() plant!: Plant;  // Usa la interfaz Plant para la propiedad plant

  constructor() { }

  ngOnInit(): void {
    // Puedes añadir lógica de inicialización aquí si es necesario
  }

}
