import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

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

  constructor(private authService: AuthService) { 
    this.getUserNameAndPhoto();
  }

  getUserNameAndPhoto() {
    this.name = this.authService.getUser()?.name;
    if (this.authService.getUser()?.photo.length == 0 || this.authService.getUser()?.photo == null) {
      this.photo = "../../../../assets/profile/profile-icon.png"
    } else{
      this.photo = this.authService.getUser()?.photo;
    }
  }
}
