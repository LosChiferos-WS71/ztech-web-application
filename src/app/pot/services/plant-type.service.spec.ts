import { TestBed } from '@angular/core/testing';

import { PlantTypeService } from './plant-type.service';

describe('PlantTypeService', () => {
  let service: PlantTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
