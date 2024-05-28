import { Routes } from '@angular/router';
import { EditProfileFormComponent } from './account/components/edit-profile-form/edit-profile-form.component';
import { ProfileFormComponent } from './account/components/profile-form/profile-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'edit/profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileFormComponent },
    { path: 'edit/profile', component: EditProfileFormComponent}
];