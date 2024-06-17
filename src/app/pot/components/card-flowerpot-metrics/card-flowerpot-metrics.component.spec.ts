import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlowerpotMetricsComponent } from './card-flowerpot-metrics.component';

describe('CardFlowerpotMetricsComponent', () => {
  let component: CardFlowerpotMetricsComponent;
  let fixture: ComponentFixture<CardFlowerpotMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFlowerpotMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFlowerpotMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
