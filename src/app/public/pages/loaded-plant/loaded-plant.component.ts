import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-loaded-plant',
  standalone: true,
  imports: [ ToolbarComponent ],
  templateUrl: './loaded-plant.component.html',
  styleUrl: './loaded-plant.component.css'
})
export class LoadedPlantComponent {

}
