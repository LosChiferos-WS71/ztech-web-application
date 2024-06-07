import { TestBed } from '@angular/core/testing';

import { PlantOwnerService } from './plant-owner.service';

describe('PlantOwnerService', () => {
  let service: PlantOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
