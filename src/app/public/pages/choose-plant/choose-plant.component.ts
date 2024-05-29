import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { FlowerpotComponent } from '../../../flowerpot/components/flowerpot/flowerpot.component';

@Component({
  selector: 'app-choose-plant',
  standalone: true,
  imports: [ToolbarComponent, FlowerpotComponent, CommonModule, FormsModule],
  templateUrl: './choose-plant.component.html',
  styleUrl: './choose-plant.component.css'
})
export class ChoosePlantComponent {
  searchText: string = '';
  
  plants = [
    {
      imageSrc: '../../../../assets/ztech/plant1.png',
      title: 'PLANT 1',
      description: 'plant 1'
    },
    {
      imageSrc: '../../../../assets/ztech/plant2.png',
      title: 'PLANT 2',
      description: 'plant 2'
    },
    {
      imageSrc: '../../../../assets/ztech/plant1.png',
      title: 'PLANT 3',
      description: 'plant 3'
    },
    {
      imageSrc: '../../../../assets/ztech/plant2.png',
      title: 'PLANT 4',
      description: 'plant 4'
    },
    {
      imageSrc: '../../../../assets/ztech/plant1.png',
      title: 'PLANT 5',
      description: 'plant 5'
    },
    {
      imageSrc: '../../../../assets/ztech/plant2.png',
      title: 'PLANT 6',
      description: 'plant 6'
    },
    {
      imageSrc: '../../../../assets/ztech/plant1.png',
      title: 'PLANT 7',
      description: 'plant 7'
    },
    {
      imageSrc: '../../../../assets/ztech/plant2.png',
      title: 'PLANT 8',
      description: 'plant 8'
    },
    {
      imageSrc: '../../../../assets/ztech/plant1.png',
      title: 'PLANT 9',
      description: 'plant 9'
    },
    {
      imageSrc: '../../../../assets/ztech/plant2.png',
      title: 'PLANT 10',
      description: 'plant 10'
    },
    {
      imageSrc: '../../../../assets/ztech/plant1.png',
      title: 'PLANT 11',
      description: 'plant 11'
    },
    {
      imageSrc: '../../../../assets/ztech/plant2.png',
      title: 'PLANT 12',
      description: 'plant 12'
    },
  ];

  filteredPlants = [...this.plants];

  filterPlants() {
    this.filteredPlants = this.plants.filter(plant =>
      plant.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
