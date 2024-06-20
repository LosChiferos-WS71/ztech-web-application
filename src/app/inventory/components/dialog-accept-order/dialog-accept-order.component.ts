import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlantTypeService } from '../../../pot/services/plant-type.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-dialog-accept-order',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog-accept-order.component.html',
  styleUrl: './dialog-accept-order.component.css'
})
export class DialogAcceptOrderComponent {
  constructor(public dialogRef: MatDialogRef<DialogAcceptOrderComponent>, private router: Router, @Inject(MAT_DIALOG_DATA) public data:{ name: string }, private plantTypeService: PlantTypeService, private authService: AuthService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.plantTypeService.getPlantTypeByName(this.data.name).subscribe(
      (plantType) => {
        this.authService.setPlantType(plantType.id);
        this.router.navigate(['/login']);
        this.dialogRef.close();
        //setTimeout(() => {
        //  this.router.navigate(['/configuration/flowerpot']);
        //}, 3000);
      },
      (error) => {
        console.log('Error type by name: ', error);
      }
    );
  }
}
