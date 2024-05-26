import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.router.navigate(['/loaded-plant']);
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate(['/add-pot']);
    }, 3000);
  }
}
