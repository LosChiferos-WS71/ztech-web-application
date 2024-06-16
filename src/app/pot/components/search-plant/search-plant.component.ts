import { Component, OnInit } from '@angular/core';
import { CardPlantComponent } from "../card-plant/card-plant.component";
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PlantTypeResponse } from '../../models/plant-type.model';
import { PlantTypeService } from '../../services/plant-type.service';


@Component({
    selector: 'app-search-plant',
    standalone: true,
    templateUrl: './search-plant.component.html',
    styleUrl: './search-plant.component.css',
    imports: [CardPlantComponent, CommonModule, MatInputModule, MatFormFieldModule, FormsModule, MatIconModule],
    providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } } ]
})
export class SearchPlantComponent implements OnInit{
  searchText = '';
  plantTypes: PlantTypeResponse[] = [];
  filteredPlants: PlantTypeResponse[] = [];

  constructor(private plantTypeService: PlantTypeService) {}

  ngOnInit() {
    this.plantTypeService.getAllPlantTypes().subscribe(
      (data) => {
        this.plantTypes = data;
        this.filteredPlants = this.plantTypes;
      },
      (error) => {
        console.error('Error fetching plant types', error);
      }
    );
  }

  filterPlants() {
    this.filteredPlants = this.plantTypes.filter(plantType =>
      plantType.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      plantType.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  
}
