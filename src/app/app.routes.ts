import { Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { RecoverPasswordComponent } from './public/pages/recover-password/recover-password.component';
import { RecoverPasswordConfirmationComponent } from './public/pages/recover-password-confirmation/recover-password-confirmation.component';
import { ProfileComponent } from './public/pages/profile/profile.component';
import { EditProfileComponent } from './public/pages/edit-profile/edit-profile.component';
import { AddPotComponent } from './public/pages/add-pot/add-pot.component';
import { CodeConfirmationComponent } from './public/pages/code-confirmation/code-confirmation.component';
import { ChoosePlantComponent } from './public/pages/choose-plant/choose-plant.component';
import { LoadedPlantComponent } from './public/pages/loaded-plant/loaded-plant.component';
import { ConfigurationFlowerpotComponent } from './public/pages/configuration-flowerpot/configuration-flowerpot.component';
import { LoadedPotComponent } from './public/pages/loaded-pot/loaded-pot.component';
import { FlowerpotDetailComponent } from './public/pages/flowerpot-detail/flowerpot-detail.component';
import { FlowerpotMetricsComponent } from './public/pages/flowerpot-metrics/flowerpot-metrics.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover/password', component: RecoverPasswordComponent },
    { path: 'recover/password/confirmation/:message', component: RecoverPasswordConfirmationComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'edit/profile', component: EditProfileComponent },
	  { path: 'add/pot', component: AddPotComponent },
    { path: 'code/confirmation/:message', component: CodeConfirmationComponent },
    { path: 'choose/plant', component: ChoosePlantComponent },
    { path: 'loaded/plant', component: LoadedPlantComponent},
    { path: 'configuration/flowerpot', component: ConfigurationFlowerpotComponent},
    { path: 'loaded/pot', component: LoadedPotComponent},
    { path: 'flowerpot/detail', component: FlowerpotDetailComponent },
    { path: 'flowerpot/metrics', component: FlowerpotMetricsComponent },
];