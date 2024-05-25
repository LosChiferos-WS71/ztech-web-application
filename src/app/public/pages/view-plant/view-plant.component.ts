import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { CardPlantComponent } from "../../../flowerpot/components/card-plant/card-plant.component";
import { SearchPlantComponent } from "../../../flowerpot/components/search-plant/search-plant.component";

@Component({
    selector: 'app-view-plant',
    standalone: true,
    templateUrl: './view-plant.component.html',
    styleUrl: './view-plant.component.css',
    imports: [ToolbarComponent, CardPlantComponent, SearchPlantComponent]
})
export class ViewPlantComponent {

}
