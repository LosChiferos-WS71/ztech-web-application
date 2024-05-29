import { Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';
import { AddPotComponent } from './public/pages/add-pot/add-pot.component';
import { CodeConfirmationComponent } from './public/pages/code-confirmation/code-confirmation.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
	{ path: 'add/pot', component: AddPotComponent },
    { path: 'code/confirmation/:message', component: CodeConfirmationComponent }
];