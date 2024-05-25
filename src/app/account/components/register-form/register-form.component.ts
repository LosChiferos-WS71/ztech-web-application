import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  hide = true;
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  togglePasswordVisibility(input: HTMLInputElement): void {
    input.type = this.hide ? 'text' : 'password';
    this.hide = !this.hide;
  }

  registerUser(): void {
    this.router.navigate(['/login']);
  }
}
