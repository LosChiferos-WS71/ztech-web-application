import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { CardPlantComponent } from '../../../pot/components/card-plant/card-plant.component';
import { SearchPlantComponent } from "../../../pot/components/search-plant/search-plant.component";
import { MyPlantComponent } from '../../../loan/components/my-plant/my-plant.component';

@Component({
    selector: 'app-view-plant',
    standalone: true,
    templateUrl: './view-plant.component.html',
    styleUrl: './view-plant.component.css',
    imports: [ToolbarComponent, CardPlantComponent, SearchPlantComponent, MyPlantComponent]
})
export class ViewPlantComponent {

}
