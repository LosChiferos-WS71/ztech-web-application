import { Routes } from '@angular/router';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { RecoverPasswordComponent } from './public/pages/recover-password/recover-password.component';
import { RecoverPasswordConfirmationComponent } from './public/pages/recover-password-confirmation/recover-password-confirmation.component';
import { FlowerpotsListComponent } from './public/pages/flowerpots-list/flowerpots-list.component';
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
import { PlantDetailComponent } from './pot/components/plant-detail/plant-detail.component';
import { ViewPlantComponent } from './public/pages/view-plant/view-plant.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
    { path: '', redirectTo: '/flowerpots/list', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover/password', component: RecoverPasswordComponent },
    { path: 'recover/password/confirmation/:message', component: RecoverPasswordConfirmationComponent },
    { path: 'flowerpots/list', component: FlowerpotsListComponent, ...canActivate(redirectUnauthorizedToLogin)},
    { path: 'profile', component: ProfileComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'edit/profile', component: EditProfileComponent, ...canActivate(redirectUnauthorizedToLogin) },
	{ path: 'add/pot', component: AddPotComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'code/confirmation/:message', component: CodeConfirmationComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'choose/plant', component: ChoosePlantComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'loaded/plant', component: LoadedPlantComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'configuration/flowerpot', component: ConfigurationFlowerpotComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'loaded/pot', component: LoadedPotComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'flowerpot/detail/:id', component: FlowerpotDetailComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'flowerpot/metrics/:id', component: FlowerpotMetricsComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'plant/view', component: ViewPlantComponent, ...canActivate(redirectUnauthorizedToLogin) },
    { path: 'plant/detail/:id', component: PlantDetailComponent, ...canActivate(redirectUnauthorizedToLogin) },
];