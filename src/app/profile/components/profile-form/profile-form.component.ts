import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  birthdate: string = '';
  gender: string = '';
  phone: string = '';

  constructor(private router: Router) {}

  editProfile(): void {
    this.router.navigate(['/edit/profile']);
  }
}
