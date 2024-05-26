import { Routes } from '@angular/router';
import { RecoverPasswordFormComponent } from './account/components/recover-password-form/recover-password-form.component';

export const routes: Routes = [
    {path: '', redirectTo: '/recover/password', pathMatch: 'full'},
    {path: 'recover/password', component: RecoverPasswordFormComponent},
];