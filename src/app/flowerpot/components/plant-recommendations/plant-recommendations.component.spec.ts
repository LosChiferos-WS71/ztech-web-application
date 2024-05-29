import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantRecommendationsComponent } from './plant-recommendations.component';

describe('PlantRecommendationsComponent', () => {
  let component: PlantRecommendationsComponent;
  let fixture: ComponentFixture<PlantRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantRecommendationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
