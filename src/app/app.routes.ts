import { Routes } from '@angular/router';
import { ChoosePlantComponent } from './public/pages/choose-plant/choose-plant.component';

export const routes: Routes = [
    { path: '', redirectTo: 'choose-plant', pathMatch: 'full' },
    { path: 'choose-plant', component: ChoosePlantComponent }
];