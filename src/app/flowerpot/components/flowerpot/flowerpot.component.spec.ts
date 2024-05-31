import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerpotComponent } from './flowerpot.component';

describe('FlowerpotComponent', () => {
  let component: FlowerpotComponent;
  let fixture: ComponentFixture<FlowerpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerpotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
