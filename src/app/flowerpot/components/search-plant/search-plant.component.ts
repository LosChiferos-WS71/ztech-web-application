import { Component } from '@angular/core';
import { CardPlantComponent } from "../card-plant/card-plant.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-search-plant',
    standalone: true,
    templateUrl: './search-plant.component.html',
    styleUrl: './search-plant.component.css',
    imports: [CardPlantComponent, CommonModule]
})
export class SearchPlantComponent {
  plants = [
    { name: 'PLANT 1', description: 'Plant 1', image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg' },
    { name: 'PLANT 2', description: 'Plant 2', image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg' },
    { name: 'PLANT 3', description: 'Plant 3', image: 'https://media.istockphoto.com/id/1372896722/es/foto/planta-de-pl%C3%A1tano-en-maceta-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=l4EmNUhwxmge4YwY_u-n5YvOgzBjc4ruDGVfrm9m_s8='},
    { name: 'PLANT 4', description: 'Plant 4', image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg' },
    { name: 'PLANT 5', description: 'Plant 5', image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg' },
    { name: 'PLANT 6', description: 'Plant 6', image: 'https://media.istockphoto.com/id/1372896722/es/foto/planta-de-pl%C3%A1tano-en-maceta-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=l4EmNUhwxmge4YwY_u-n5YvOgzBjc4ruDGVfrm9m_s8='},
    { name: 'PLANT 7', description: 'Plant 7', image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg' },
  ];
}
