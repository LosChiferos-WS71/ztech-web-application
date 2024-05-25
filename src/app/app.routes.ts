import { Routes } from '@angular/router';
import { AddPotComponent } from './public/pages/add-pot/add-pot.component';
import { CodeConfirmationComponent } from './public/pages/code-confirmation/code-confirmation.component';

export const routes: Routes = [
	{ path: 'add/pot', component: AddPotComponent },
    { path: 'code/confirmation/:message', component: CodeConfirmationComponent}
];