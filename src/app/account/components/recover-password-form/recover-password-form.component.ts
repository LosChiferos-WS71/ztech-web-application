import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-recover-password-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './recover-password-form.component.html',
  styleUrl: './recover-password-form.component.css'
})
export class RecoverPasswordFormComponent {
  email: string = '';

  constructor(private router: Router) {};

  recoverPassword() {
    // Logica de verificacion de correo y envio de correo
    this.router.navigate(['/recover/password/confirmation', "valid"]);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
