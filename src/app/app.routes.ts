import { Routes } from '@angular/router';
import { PlantDetailComponent } from './flowerpot/components/plant-detail/plant-detail.component';
import { ViewPlantComponent } from './public/pages/view-plant/view-plant.component';

export const routes: Routes = [
    { path: '', redirectTo: 'plant/view', pathMatch: 'full' },
    { path: 'plant/view', component: ViewPlantComponent },
    { path: 'plant/detail/:id', component: PlantDetailComponent },
];