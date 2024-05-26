import { Routes } from '@angular/router';
import { PlantDetailComponent } from './flowerpot/components/plant-detail/plant-detail.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import ('../app/public/pages/view-plant/view-plant.component').then(value => value.ViewPlantComponent)
    },
    { path: 'plant-detail/:id', component: PlantDetailComponent },
];