import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../shared/services/auth.service';
import { PlantOwnerService } from '../../services/plant-owner.service';


@Component({
  selector: 'app-recover-password-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './recover-password-form.component.html',
  styleUrl: './recover-password-form.component.css'
})
export class RecoverPasswordFormComponent {
  email: string = '';

  constructor(private router: Router, private authService: AuthService, private plantOwnerService: PlantOwnerService) {};

  recoverPassword() {
    this.plantOwnerService.getPlantOwnerByEmail(this.email).subscribe(
      () => {
        this.authService.forgotPassword(this.email);
      },
      error => {
        this.router.navigate(['/recover/password/confirmation', "invalid"]);
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
