import { Routes } from '@angular/router';
import { CardFlowerpotComponent } from './flowerpot/components/card-flowerpot/card-flowerpot.component';

export const routes: Routes = [
    { path: '', redirectTo: '/card/flowerpot', pathMatch: 'full' },
    { path: 'card/flowerpot', component: CardFlowerpotComponent}
];