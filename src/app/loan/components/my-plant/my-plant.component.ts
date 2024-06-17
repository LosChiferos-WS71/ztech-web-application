import { Component } from '@angular/core';
import { CardMyPlantComponent } from '../../../pot/components/card-my-plant/card-my-plant.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';
import { FlowerpotAssignmentService } from '../../services/flowerpot-assignment.service';

@Component({
  selector: 'app-my-plant',
  standalone: true,
  imports: [CardMyPlantComponent,CommonModule],
  templateUrl: './my-plant.component.html',
  styleUrl: './my-plant.component.css'
})
export class MyPlantComponent {
  plantIds: number[] = [];

  constructor(private authService: AuthService, private flowerpotAssignmentService: FlowerpotAssignmentService) {}

  ngOnInit() {
    this.flowerpotAssignmentService.getPlantTypeIdsByPlantOwnerId(this.authService.getUser()?.id).subscribe(
      (data) => {
        this.plantIds = data;
      },
      (error) => {
        console.error('Error fetching plant IDs', error);
      }
    );
  }
}
