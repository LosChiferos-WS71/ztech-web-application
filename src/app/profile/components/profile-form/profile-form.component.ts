import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PlantOwnerService } from '../../services/plant-owner.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent implements OnInit{
  name: string = '';
  email: string = '';
  address: string = '';
  birthday: string = '';
  gender: string = '';
  phone: string = '';

  constructor(private router: Router, private authService: AuthService , private plantOwnerService: PlantOwnerService) {}

  ngOnInit(): void {
    this.plantOwnerService.getPlantOwnerByEmail(this.authService.getUser()?.email).subscribe(
      (response) => {
        this.name = response.name;
        this.email = response.email;
        this.address = response.address;
        this.birthday = response.birthday;
        this.gender = response.gender;
        if (response.phone == 0) {
          this.phone = '';
        } else {
          this.phone = response.phone.toString();
        }
      }
    );
  }

  editProfile(): void {
    this.router.navigate(['/edit/profile']);
  }
}
