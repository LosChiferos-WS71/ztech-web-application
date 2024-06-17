import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { PlantTypeService } from '../../services/plant-type.service';
import { PlantTypeResponse } from '../../models/plant-type.model';

@Component({
  selector: 'app-card-my-plant',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-my-plant.component.html',
  styleUrl: './card-my-plant.component.css'
})
export class CardMyPlantComponent implements OnInit{
  @Input() plantId!: number;
  plantType!: PlantTypeResponse;

  constructor(private router: Router, private plantTypeService: PlantTypeService) {}

  ngOnInit() {
    this.plantTypeService.getPlantTypeById(this.plantId).subscribe((data) => {
      this.plantType = data;
    });
  }

  navigateToDetail() {
    this.router.navigate(['/plant/detail', this.plantId]);
  }
}
