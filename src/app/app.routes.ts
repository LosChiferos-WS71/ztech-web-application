import { Routes } from '@angular/router';
import { EditProfileFormComponent } from './account/components/edit-profile-form/edit-profile-form.component';
import { ProfileComponent } from './public/pages/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
    { path: 'edit/profile', component: EditProfileFormComponent}
];