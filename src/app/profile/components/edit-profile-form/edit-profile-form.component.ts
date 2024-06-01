import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-profile-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './edit-profile-form.component.html',
  styleUrl: './edit-profile-form.component.css'
})
export class EditProfileFormComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  birthdate: string = '';
  gender: string = '';
  phone: string = '';

  constructor(private router: Router) {}

  saveProfile(): void {
    this.router.navigate(['/profile']);
  }
}
