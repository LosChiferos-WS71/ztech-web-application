import { Routes } from '@angular/router';
import { MyFlowerpotsComponent } from './flowerpot/components/my-flowerpots/my-flowerpots.component';

export const routes: Routes = [
    { path: '', redirectTo: '/my/flowerpots', pathMatch: 'full' },
    { path: 'my/flowerpots', component: MyFlowerpotsComponent}
];