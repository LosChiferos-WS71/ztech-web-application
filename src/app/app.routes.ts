import { Routes } from '@angular/router';
import { RegisterFormComponent } from './account/components/register-form/register-form.component';

export const routes: Routes = [
    {path: '', redirectTo: '/register', pathMatch: 'full'},
    {path: 'register', component: RegisterFormComponent},
];