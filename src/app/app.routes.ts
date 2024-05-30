import { Routes } from '@angular/router';
import { FlowerpotsListComponent } from './public/pages/flowerpots-list/flowerpots-list.component';
import { WelcomeUserComponent } from './account/components/welcome-user/welcome-user.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome/user', pathMatch: 'full' },
    { path: 'welcome/user', component: WelcomeUserComponent},
    { path: 'flowerpots/list', component: FlowerpotsListComponent}
];