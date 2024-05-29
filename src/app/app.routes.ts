import { Routes } from '@angular/router';
import { ChoosePlantComponent } from './public/pages/choose-plant/choose-plant.component';
import { LoadedPlantComponent } from './public/pages/loaded-plant/loaded-plant.component';
import { ConfigurationFlowerpotComponent } from './public/pages/configuration-flowerpot/configuration-flowerpot.component';
import { LoadedPotComponent } from './public/pages/loaded-pot/loaded-pot.component';

export const routes: Routes = [
    { path: 'choose/plant', component: ChoosePlantComponent },
    { path: 'loaded/plant', component: LoadedPlantComponent},
    { path: 'configuration/flowerpot', component: ConfigurationFlowerpotComponent},
    { path: 'loaded/pot', component: LoadedPotComponent}
];