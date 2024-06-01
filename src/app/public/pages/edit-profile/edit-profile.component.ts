import { Component } from '@angular/core';

import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { EditProfileFormComponent } from '../../../profile/components/edit-profile-form/edit-profile-form.component';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ToolbarComponent, EditProfileFormComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

}
