import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import ('../app/public/pages/flowerpot-detail/flowerpot-detail.component').then(value => value.FlowerpotDetailComponent)

    },
    
];