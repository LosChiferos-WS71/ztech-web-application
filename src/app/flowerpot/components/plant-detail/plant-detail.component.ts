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
    { id: '1', name: 'PLANT 1', description: 'Description of Plant 1', image: 'https://img.freepik.com/vector-gratis/planta-maceta-dibujos-animados_1308-107212.jpg' },
    { id: '2', name: 'PLANT 2', description: 'Description of Plant 2', image: 'https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg' },
    { id: '3', name: 'PLANT 3', description: 'Description of Plant 3', image: 'https://media.istockphoto.com/id/1372896722/es/foto/planta-de-pl%C3%A1tano-en-maceta-aislada-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=l4EmNUhwxmge4YwY_u-n5YvOgzBjc4ruDGVfrm9m_s8='},
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const plantId = this.route.snapshot.paramMap.get('id');
    this.plant = this.plants.find(p => p.id === plantId);
  }
}