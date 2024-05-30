import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardFlowerpotComponent } from '../card-flowerpot/card-flowerpot.component';

@Component({
  selector: 'app-my-flowerpots',
  standalone: true,
  imports: [CommonModule, CardFlowerpotComponent],
  templateUrl: './my-flowerpots.component.html',
  styleUrl: './my-flowerpots.component.css'
})
export class MyFlowerpotsComponent {
  flowerpots = [
    {
      id: '1',
      name: 'Basil',
      image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg',
      temperatureValue: 20,
      humidityValue: 50,
      sunlightValue: 60
    },
    {
      id: '2',
      name: 'Mint',
      image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
      temperatureValue: 25,
      humidityValue: 40,
      sunlightValue: 70
    },
    {
      id: '3',
      name: 'Rosemary',
      image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg',
      temperatureValue: 30,
      humidityValue: 60,
      sunlightValue: 50
    },
    {
      id: '4',
      name: 'Thyme',
      image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg',
      temperatureValue: 15,
      humidityValue: 70,
      sunlightValue: 40
    },
    {
      id: '5',
      name: 'Parsley',
      image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
      temperatureValue: 20,
      humidityValue: 50,
      sunlightValue: 60
    }
  ];
}
