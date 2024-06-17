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
  photo: string = '';

  constructor(private router: Router, private authService: AuthService , private plantOwnerService: PlantOwnerService) {}

  ngOnInit(): void {
    this.plantOwnerService.getPlantOwnerByEmail(this.authService.getUser()?.email).subscribe(
      (response) => {
        this.name = response.name;
        this.email = response.email;
        this.address = response.address;
        this.birthday = this.formatDateToDisplay(response.birthday);
        if (response.gender == "male") {
          this.gender = "Male";
        } else if (response.gender == "female") {
          this.gender = "Female"
        } else {
          this.gender = response.gender;
        }
        if (response.phone == 0) {
          this.phone = '';
        } else {
          this.phone = response.phone.toString();
        }
        if (response.photo == null || response.photo == '') {
          this.photo = "../../../assets/profile/profile-icon.png";
        } else {
          this.photo = response.photo;
        }
      }
    );
  }

  formatDateToDisplay(dateString: string): string {
    const parts = dateString.split('-');

    if (parts.length !== 3) {
      console.error('Invalid date format');
      return dateString;
    }

    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    
    return `${day}/${month}/${year}`;
  }

  editProfile(): void {
    this.router.navigate(['/edit/profile']);
  }
}
