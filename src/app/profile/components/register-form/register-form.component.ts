import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PlantOwnerService } from '../../services/plant-owner.service';
import { PlantOwnerRequest } from '../../models/plant-owner.model';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  hide = true;
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService , private plantOwnerService: PlantOwnerService) {}

  togglePasswordVisibility(input: HTMLInputElement): void {
    input.type = this.hide ? 'text' : 'password';
    this.hide = !this.hide;
  }

  registerUser(): void {
    const plantOwnerRequest: PlantOwnerRequest = {
      name: this.name,
      email: this.email,
      address: "",
      phone: 0,
      photo: "",
      dni: 0,
      birthday: "",
      gender: ""
    };

    this.plantOwnerService.createPlantOwner(plantOwnerRequest).subscribe(
      () => {
        this.authService.register({email: this.email, password: this.password})
          .then(() => {
            this.router.navigate(['/login']);
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error(error);
          });
      },
      error => {
        if (error.status === 400 && error.message === "Plant owner with same email already exists") {
          this.errorMessage = "Account with same email already exists";
        }
        console.error(error);
      }
    );
  }
}