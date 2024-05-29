import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerpotMetricsComponent } from './flowerpot-metrics.component';

describe('FlowerpotMetricsComponent', () => {
  let component: FlowerpotMetricsComponent;
  let fixture: ComponentFixture<FlowerpotMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerpotMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerpotMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
