import { TestBed } from '@angular/core/testing';

import { FlowerpotAssigmentService } from './flowerpot-assigment.service';

describe('FlowerpotAssigmentService', () => {
  let service: FlowerpotAssigmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerpotAssigmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
