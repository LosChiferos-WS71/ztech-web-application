import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';

import { RegisterFormComponent } from '../../../profile/components/register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, MatDividerModule, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
