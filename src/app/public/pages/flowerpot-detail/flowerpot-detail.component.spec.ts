import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerpotDetailComponent } from './flowerpot-detail.component';

describe('FlowerpotDetailComponent', () => {
  let component: FlowerpotDetailComponent;
  let fixture: ComponentFixture<FlowerpotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerpotDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerpotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
