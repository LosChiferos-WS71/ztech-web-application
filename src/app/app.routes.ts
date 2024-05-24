import { Routes } from '@angular/router';
import { AddPotComponent } from './public/pages/add-pot/add-pot.component';

export const routes: Routes = [
    { path: '', redirectTo: '/add/pot', pathMatch: 'full' },
	{ path: 'add/pot', component: AddPotComponent },
];