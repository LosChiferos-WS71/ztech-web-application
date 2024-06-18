import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { CardFlowerpotMetricsComponent } from '../../../pot/components/card-flowerpot-metrics/card-flowerpot-metrics.component';

import { FlowerpotAssignmentResponse } from '../../models/flowerpot-assignment.model';
import { FlowerpotAssignmentService } from '../../services/flowerpot-assignment.service';

@Component({
  selector: 'app-card-flowerpot',
  standalone: true,
  imports: [CommonModule, MatCardModule, CardFlowerpotMetricsComponent],
  templateUrl: './card-flowerpot.component.html',
  styleUrl: './card-flowerpot.component.css'
})
export class CardFlowerpotComponent implements OnInit{
  @Input() flowerpotId!: number;
  flowerpotAssignment!: FlowerpotAssignmentResponse;

  constructor(private router: Router, private flowerpotAssignmentService: FlowerpotAssignmentService) {}

  ngOnInit() {
    this.flowerpotAssignmentService.getFlowerpotAssignmentByFlowerpotId(this.flowerpotId).subscribe((data) => {
      this.flowerpotAssignment = data;
    });
  }

  navigateToDetail() {
    this.router.navigate(['/flowerpot/detail', this.flowerpotId]);
  }
}
