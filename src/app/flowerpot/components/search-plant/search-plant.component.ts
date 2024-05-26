import { Component } from '@angular/core';
import { CardPlantComponent } from "../card-plant/card-plant.component";
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-search-plant',
    standalone: true,
    templateUrl: './search-plant.component.html',
    styleUrl: './search-plant.component.css',
    imports: [CardPlantComponent, CommonModule, MatInputModule, MatFormFieldModule, FormsModule, MatIconModule],
    providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } } ]
})
export class SearchPlantComponent {
  searchText = '';
  plants = [
    { name: 'PLANT 1', description: 'Plant 1', image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg' },
    { name: 'PLANT 1', description: 'Plant 2', image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg' },
    { name: 'PLANT 3', description: 'Plant 3', image: 'https://media.istockphoto.com/id/1372896722/es/foto/planta-de-pl%C3%A1tano-en-maceta-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=l4EmNUhwxmge4YwY_u-n5YvOgzBjc4ruDGVfrm9m_s8='},
    { name: 'PLANT 4', description: 'Plant 4', image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg' },
    { name: 'PLANT 5', description: 'Plant 5', image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg' },
    { name: 'PLANT 6', description: 'Plant 6', image: 'https://media.istockphoto.com/id/1372896722/es/foto/planta-de-pl%C3%A1tano-en-maceta-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=l4EmNUhwxmge4YwY_u-n5YvOgzBjc4ruDGVfrm9m_s8='},
    { name: 'PLANT 7', description: 'Plant 7', image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg' },
  ];

  filteredPlants: { name: string; description: string; image: string; }[] = [];

  ngOnInit() {
    this.filteredPlants = this.plants;  // Inicializa con todas las plantas
  }

  ngOnChanges() {
    this.filterPlants();
  }

  filterPlants() {
    this.filteredPlants = this.plants.filter(plant =>
      plant.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      plant.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
