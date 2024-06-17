import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { PlantOwnerService } from '../../services/plant-owner.service';

@Component({
  selector: 'app-welcome-user',
  standalone: true,
  imports: [],
  templateUrl: './welcome-user.component.html',
  styleUrl: './welcome-user.component.css'
})
export class WelcomeUserComponent {
  name: string = '';
  photo: string = '';

  constructor(private authService: AuthService, private plantOwnerService: PlantOwnerService) { 
    this.getUserNameAndPhoto();
  }

  getUserNameAndPhoto() {
    this.plantOwnerService.getPlantOwnerByEmail(this.authService.getUser()?.email).subscribe(
      (response) => {
        this.name = response.name;
        if (response.photo.length == 0 || response.photo == null) {
          this.photo = "../../../../assets/profile/profile-icon.png"
        } else{
          this.photo = response.photo;
        }
      }
    );
  }
}
