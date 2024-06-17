import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlantTypeService } from '../../../pot/services/plant-type.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private router: Router, @Inject(MAT_DIALOG_DATA) public data:{ name: string }, private plantTypeService: PlantTypeService, private authService: AuthService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.plantTypeService.getPlantTypeByName(this.data.name).subscribe(
      (plantType) => {
        this.authService.setPlantType(plantType.id);
        this.router.navigate(['/loaded/plant']);
        this.dialogRef.close();
        setTimeout(() => {
          this.router.navigate(['/configuration/flowerpot']);
        }, 3000);
      },
      (error) => {
        console.log('Error fetching plant type by name: ', error);
      }
    );
  }
}
