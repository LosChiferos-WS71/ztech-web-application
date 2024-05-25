import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import ('../app/public/pages/view-plant/view-plant.component').then(value => value.ViewPlantComponent)
    }
];