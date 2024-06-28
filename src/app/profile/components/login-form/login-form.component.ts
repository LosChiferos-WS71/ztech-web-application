import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PlantOwnerService } from '../../services/plant-owner.service';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthenticationService } from '../../../iam/services/authentication.service';
import { SignInRequest } from '../../../iam/model/sign-in.request';
import { BehaviorSubject } from 'rxjs';

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
  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  constructor(private router: Router, private authService: AuthService, private plantOwnerService: PlantOwnerService, private authenticationService: AuthenticationService) {}

  togglePasswordVisibility(input: HTMLInputElement): void {
    input.type = this.hide ? 'text' : 'password';
    this.hide = !this.hide;
  }

  login(): void {
    const signInRequest = new SignInRequest(this.email);
    this.authenticationService.signIn(signInRequest).subscribe({
      next: (response) => {
        this.signedIn.next(true);
        this.signedInUserId.next(response.id);
        this.signedInUsername.next(response.email);
        localStorage.setItem('token', response.token);
        this.authService.login({email: this.email, password: this.password})
          .then(() => {
            this.authService.setUser(response);
            const signInRequest = new SignInRequest(this.email);
            this.authenticationService.signIn(signInRequest);
            this.router.navigate(['/flowerpots/list']);
          })
          .catch(error => {
            this.errorMessage = "Incorrect password. Please try again."
            this.router.navigate(['/login']).then();
          });
      },
      error: (error) => {
        console.error(`Error while signing in: ${error}`);
        this.signedIn.next(false);
        this.signedInUserId.next(0);
        this.signedInUsername.next('');
        localStorage.removeItem('token');
        this.router.navigate(['/login']).then();
      }
    });
  }
}
