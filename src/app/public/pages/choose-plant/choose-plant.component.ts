import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { FlowerpotComponent } from '../../../loan/components/flowerpot/flowerpot.component';
import { FlowerpotService } from '../../../pot/services/flowerpot.service';
import { PlantTypeService } from '../../../pot/services/plant-type.service';
import { PlantTypeResponse } from '../../../pot/models/plant-type.model';

@Component({
  selector: 'app-choose-plant',
  standalone: true,
  imports: [ToolbarComponent, FlowerpotComponent, CommonModule, FormsModule],
  templateUrl: './choose-plant.component.html',
  styleUrl: './choose-plant.component.css'
})
export class ChoosePlantComponent implements OnInit {
  searchText: string = '';
  plants: PlantTypeResponse[] = [];
  filteredPlants: PlantTypeResponse[] = [];

  constructor(private plantTypeService: PlantTypeService) {}

  ngOnInit(): void {
    this.plantTypeService.getAllPlantTypes().subscribe(
      (data) => {
        this.plants = data;
        this.filteredPlants = this.plants;
      },
      (error) => {
        console.log('Error fetching plant types: ', error);
      }
    );
  }

  filterPlants() {
    if (this.searchText.trim() === '') {
      this.filteredPlants = this.plants;
    } else {
      this.filteredPlants = this.plants.filter(plant =>
        plant.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
