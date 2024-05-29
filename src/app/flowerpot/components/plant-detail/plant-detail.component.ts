import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './plant-detail.component.html',
  styleUrl: './plant-detail.component.css'
})

export class PlantDetailComponent implements OnInit {
  plant: any;


  private plants = [
    { 
      id: '1', 
      name: 'PLANT 1', 
      subname: 'Plant 1 Subname',
      description: 'Description of Plant 1', 
      image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg',
      recommendations: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Fusce sed velit interdum, aliquam nisi vitae, mattis quam."
      ],
      parameters: {
        environmentalTemperature: "Moderate",
        temperature: "25°C",
        sunlight: "High",
        uvRays: "3UV",
        humidityOfFloor: "Low",
        humidityPercentage: "10%"
      },
      waterEvery: "5 days",
      sunHours: "3 hours of sun a day"
    },
    { 
      id: '2', 
      name: 'PLANT 2', 
      subname: 'Plant 2 Subname',
      description: 'Description of Plant 2', 
      image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg',
      recommendations: [
        "Adjust your watering schedule according to the season.",
        "Place your plant in indirect sunlight."
      ],
      parameters: {
        environmentalTemperature: "Warm",
        temperature: "22°C",
        sunlight: "Medium",
        uvRays: "2UV",
        humidityOfFloor: "Medium",
        humidityPercentage: "20%"
      },
      waterEvery: "7 days",
      sunHours: "5 hours of sun a day"
    },
    { 
      id: '3', 
      name: 'PLANT 3', 
      subname: 'Plant 3 Subname',
      description: 'Description of Plant 3', 
      image: 'https://media.istockphoto.com/id/1372896722/es/foto/planta-de-pl%C3%A1tano-en-maceta-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=l4EmNUhwxmge4YwY_u-n5YvOgzBjc4ruDGVfrm9m_s8=',
      recommendations: [
        "Do not overwater during the winter months.",
        "Ensure the pot has good drainage."
      ],
      parameters: {
        environmentalTemperature: "Cold",
        temperature: "15°C",
        sunlight: "Low",
        uvRays: "1UV",
        humidityOfFloor: "High",
        humidityPercentage: "30%"
      },
      waterEvery: "10 days",
      sunHours: "2 hours of sun a day"
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const plantId = this.route.snapshot.paramMap.get('id');
    this.plant = this.plants.find(p => p.id === plantId);
  }
}