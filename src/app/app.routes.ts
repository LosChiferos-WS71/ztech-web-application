import { Routes } from '@angular/router';
import { FlowerpotsListComponent } from './public/pages/flowerpots-list/flowerpots-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/flowerpots/list', pathMatch: 'full' },
    { path: 'flowerpots/list', component: FlowerpotsListComponent}
];