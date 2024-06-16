import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CardFlowerpotComponent } from '../card-flowerpot/card-flowerpot.component';
import { AuthService } from '../../../shared/services/auth.service';
import { FlowerpotAssignmentService } from '../../services/flowerpot-assignment.service';

@Component({
  selector: 'app-my-flowerpots',
  standalone: true,
  imports: [CommonModule, CardFlowerpotComponent, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './my-flowerpots.component.html',
  styleUrl: './my-flowerpots.component.css'
})
export class MyFlowerpotsComponent implements OnInit{
  flowerpotIds: number[] = [];
  isLoading = true;

  spinnerDiameter = 50;
  spinnerStrokeWidth = 5;

  constructor(private router: Router, private authService: AuthService, private flowerpotAssignmentService: FlowerpotAssignmentService) {}

  ngOnInit() {
    this.flowerpotAssignmentService.getFlowerpotIdsByPlantOwnerId(this.authService.getUser()?.id).subscribe(
      (data) => {
        this.flowerpotIds = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching flowerpot IDs', error);
        this.isLoading = false;
      }
    );
  }

  goToAnotherComponent() {
    this.router.navigate(['/add/pot']);
  }

  isFlowerpotsEmpty(): boolean {
    return this.flowerpotIds.length === 0;
  }
}
