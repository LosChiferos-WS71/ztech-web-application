import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedPlantComponent } from './loaded-plant.component';

describe('LoadedPlantComponent', () => {
  let component: LoadedPlantComponent;
  let fixture: ComponentFixture<LoadedPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadedPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadedPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
