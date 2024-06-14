import { TestBed } from '@angular/core/testing';

import { FlowerpotAssignmentService } from './flowerpot-assignment.service';

describe('FlowerpotAssigmentService', () => {
  let service: FlowerpotAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerpotAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
