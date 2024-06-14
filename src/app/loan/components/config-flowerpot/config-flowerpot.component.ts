import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../shared/services/auth.service';
import { FlowerpotAssignmentService } from '../../services/flowerpot-assignment.service';
import { FlowerpotAssignmentRequest } from '../../models/flowerpot-assignment.model';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-config-flowerpot',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './config-flowerpot.component.html',
  styleUrls: ['./config-flowerpot.component.css']
})
export class ConfigFlowerpotComponent {
  name: string = '';
  image!: File;
  downloadURL$ = new Subject<string>();

  constructor(private router: Router, private authService: AuthService, private flowerpotAssignmentService: FlowerpotAssignmentService, private storage: Storage, private ngZone: NgZone) {}

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
    const imagePath = `images/flowerpots/assignments/${image.name}`;
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

  onSaveClick() {
    if (this.image) {
      this.uploadImage(this.image);
      this.downloadURL$.subscribe(url => {
        const flowerpotAssignmentRequest: FlowerpotAssignmentRequest = {
          plantOwnerId: this.authService.getUser().id,
          flowerpotId: this.authService.getFlowerpot()!,
          plantTypeId: this.authService.getPlantType()!,
          name: this.name,
          photo: url,
          startDate: "",
          endDate: ""
        };

        this.flowerpotAssignmentService.createFlowerpotAssignment(flowerpotAssignmentRequest).subscribe(
          () => {
            this.authService.finishFlowerpotAssignment();
            this.ngZone.run(() => {
              this.router.navigate(['/loaded/pot']);
              setTimeout(() => {
                this.router.navigate(['/flowerpots/list']);
              }, 3000);
            });
          },
          error => {
            console.error(error);
          }
        );
      });
    } else {
      const flowerpotAssignmentRequest: FlowerpotAssignmentRequest = {
        plantOwnerId: this.authService.getUser().id,
        flowerpotId: this.authService.getFlowerpot()!,
        plantTypeId: this.authService.getPlantType()!,
        name: this.name,
        photo: "https://firebasestorage.googleapis.com/v0/b/ztech-1d0e3.appspot.com/o/images%2Fflowerpots%2Fassignments%2FdefaultImage.jpg?alt=media&token=94e2f94a-5515-432a-89d0-82d5d6bdb540",
        startDate: "",
        endDate: ""
      };

      this.flowerpotAssignmentService.createFlowerpotAssignment(flowerpotAssignmentRequest).subscribe(
        () => {
          this.authService.finishFlowerpotAssignment();
          this.ngZone.run(() => {
            this.router.navigate(['/loaded/pot']);
            setTimeout(() => {
              this.router.navigate(['/flowerpots/list']);
            }, 3000);
          });
        },
        error => {
          console.error(error);
        }
      );
    }
  }
}