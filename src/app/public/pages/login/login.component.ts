import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';

import { LoginFormComponent } from '../../../profile/components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, MatDividerModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
