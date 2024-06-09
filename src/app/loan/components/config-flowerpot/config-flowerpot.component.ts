import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../shared/services/auth.service';
import { FlowerpotAssigmentService } from '../../services/flowerpot-assigment.service';
import { SendFlowerpotAssigment } from '../../models/flowerpot-assigment.model';

@Component({
  selector: 'app-config-flowerpot',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './config-flowerpot.component.html',
  styleUrl: './config-flowerpot.component.css'
})
export class ConfigFlowerpotComponent {
  name: string = '';

  constructor(private router: Router, private authService: AuthService, private flowerpotAssigmentService: FlowerpotAssigmentService) {}

  onSaveClick() {
    const flowerpotAssigment: SendFlowerpotAssigment = {
      plantOwnerId: this.authService.getUser().id,
      flowerpotId: this.authService.getFlowerpot()!,
      plantTypeId: this.authService.getPlantType()!,
      name: this.name,
      photo: "https://firebasestorage.googleapis.com/v0/b/ztech-1d0e3.appspot.com/o/b4df8d_5e1b7a8da8f6421d8cb94eb64415ffc4_mv2.png?alt=media&token=77fd40e1-3b47-4ef3-abcf-7e1f5f0593d4",
      startDate: "",
      endDate: ""
    };

    this.flowerpotAssigmentService.createFlowerpotAssigment(flowerpotAssigment).subscribe(
      () => {
        this.authService.finishFlowerpotAssigment();
        this.router.navigate(['/loaded/pot']);
        setTimeout(() => {
          this.router.navigate(['/flowerpots/list']);
        }, 3000);
      },
      error => {
        console.error(error);
      }
    );
  }
}
