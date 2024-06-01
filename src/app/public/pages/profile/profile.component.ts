import { Component } from '@angular/core';

import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { ProfileFormComponent } from '../../../profile/components/profile-form/profile-form.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ToolbarComponent, ProfileFormComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
