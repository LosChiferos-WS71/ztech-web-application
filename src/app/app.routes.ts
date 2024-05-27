import { Routes } from '@angular/router';
import { ProfileFormComponent } from './account/components/profile-form/profile-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileFormComponent },
];