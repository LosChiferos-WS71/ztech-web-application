import { Routes } from '@angular/router';
import { RecoverPasswordComponent } from './public/pages/recover-password/recover-password.component';

export const routes: Routes = [
    {path: '', redirectTo: '/recover/password', pathMatch: 'full'},
    {path: 'recover/password', component: RecoverPasswordComponent},
];