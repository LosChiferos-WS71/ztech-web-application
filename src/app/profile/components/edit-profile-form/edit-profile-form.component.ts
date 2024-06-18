import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../shared/services/auth.service';
import { PlantOwnerService } from '../../services/plant-owner.service';
import { PlantOwnerRequest } from '../../models/plant-owner.model';
import { Subject } from 'rxjs';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-profile-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit{
  name: string = '';
  email: string = '';
  address: string = '';
  birthday: string = '';
  gender: string = '';
  phone: string = '';
  photo: string = '';

  image!: File;
  downloadURL$ = new Subject<string>();

  constructor(private router: Router, private authService: AuthService, private plantOwnerService: PlantOwnerService, private storage: Storage, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.plantOwnerService.getPlantOwnerByEmail(this.authService.getUser()?.email).subscribe(
      (response) => {
        this.name = response.name;
        this.email = response.email;
        this.address = response.address;
        this.gender = response.gender;
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

  onImageSelected(event: any) {
    const imageSelected: File = event.target.files[0];
    this.showImageSelected(imageSelected);
  }

  showImageSelected(imageSelected: File) {
    if (imageSelected) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const previewImage = document.getElementById('image-preview') as HTMLImageElement;
        const previewText = document.getElementById('image-text') as HTMLParagraphElement;
        previewImage.src = e.target.result;
        previewText.style.display = 'none';
      };
      reader.readAsDataURL(imageSelected);
    }
    this.image = imageSelected;
  }

  async uploadImage(image: File) {
    const imagePath = `images/plant/owners/${image.name}`;
    const imageRef = ref(this.storage, imagePath);
    const uploadImage = uploadBytesResumable(imageRef, image);

    uploadImage.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.error(error);
      },
      async () => {
        const url = await getDownloadURL(imageRef);
        this.downloadURL$.next(url);
      });
  }

  saveProfile(profileForm: NgForm): void {
    if (profileForm.valid) {
      if(this.image) {
        this.uploadImage(this.image);
        this.downloadURL$.subscribe(url => {
          const plantOwnerRequest: PlantOwnerRequest = {
            name: this.name,
            email: this.email,
            address: this.address,
            phone: parseInt(this.phone),
            photo: url,
            dni: 0,
            birthday: this.birthday,
            gender: this.gender
          }

          this.plantOwnerService.updatePlantOwner(this.authService.getUser()?.id, plantOwnerRequest).subscribe(
            () => {
              this.ngZone.run(() => {
                this.router.navigate(['/profile']);
              });
            }
          );
        });
      } else {
        const plantOwnerRequest: PlantOwnerRequest = {
          name: this.name,
          email: this.email,
          address: this.address,
          phone: parseInt(this.phone),
          photo: "",
          dni: 0,
          birthday: this.birthday,
          gender: this.gender
        }

        this.plantOwnerService.updatePlantOwner(this.authService.getUser()?.id, plantOwnerRequest).subscribe(
          () => {
            this.ngZone.run(() => {
              this.router.navigate(['/profile']);
            });
          }
        );
      }
    }
  }
}