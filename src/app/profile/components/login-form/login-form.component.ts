import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Auth } from '@angular/fire/auth';
import { PlantOwnerService } from '../../services/plant-owner.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  hide = true;
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService, private plantOwnerService: PlantOwnerService) {}

  togglePasswordVisibility(input: HTMLInputElement): void {
    input.type = this.hide ? 'text' : 'password';
    this.hide = !this.hide;
  }

  login(): void {
    this.plantOwnerService.getPlantOwnerByEmail(this.email).subscribe(
      () => {
        this.authService.login({email: this.email, password: this.password})
          .then(() => {
            this.router.navigate(['/flowerpots/list']);
          })
          .catch(error => {
            this.errorMessage = "Incorrect password. Please try again."
          });
      },
      error => {
        this.errorMessage = "Account with this email does not exist. Please register."
      }
    );
  }
}
