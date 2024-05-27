import { Routes } from '@angular/router';
import { RecoverPasswordComponent } from './public/pages/recover-password/recover-password.component';
import { RecoverPasswordConfirmationComponent } from './public/pages/recover-password-confirmation/recover-password-confirmation.component';

export const routes: Routes = [
    {path: 'recover/password', component: RecoverPasswordComponent},
    {path: 'recover/password/confirmation/:message', component: RecoverPasswordConfirmationComponent},
];