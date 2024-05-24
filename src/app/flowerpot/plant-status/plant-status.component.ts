import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-plant-status',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './plant-status.component.html',
  styleUrl: './plant-status.component.css'
})
export class PlantStatusComponent {

}
