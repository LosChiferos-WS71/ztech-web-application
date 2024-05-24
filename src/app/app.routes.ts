import { Routes } from '@angular/router';
import { LoginFormComponent } from './account/components/login-form/login-form.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginFormComponent}
];