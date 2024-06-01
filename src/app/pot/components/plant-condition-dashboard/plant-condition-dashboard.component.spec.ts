import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantConditionDashboardComponent } from './plant-condition-dashboard.component';

describe('PlantConditionDashboardComponent', () => {
  let component: PlantConditionDashboardComponent;
  let fixture: ComponentFixture<PlantConditionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantConditionDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantConditionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
