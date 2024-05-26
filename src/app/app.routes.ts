import { Routes } from '@angular/router';
import { ChoosePlantComponent } from './public/pages/choose-plant/choose-plant.component';
import { LoadedPlantComponent } from './public/pages/loaded-plant/loaded-plant.component';
import { AddPotComponent } from './public/pages/add-pot/add-pot.component';
import { LoadedPotComponent } from './public/pages/loaded-pot/loaded-pot.component';

export const routes: Routes = [
    { path: '', redirectTo: 'choose-plant', pathMatch: 'full' },
    { path: 'choose-plant', component: ChoosePlantComponent },
    { path: 'loaded-plant', component: LoadedPlantComponent},
    { path: 'add-pot', component: AddPotComponent},
    { path: 'loaded-pot', component: LoadedPotComponent}
];