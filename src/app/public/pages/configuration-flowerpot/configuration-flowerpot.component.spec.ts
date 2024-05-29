import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationFlowerpotComponent } from './configuration-flowerpot.component';

describe('ConfigurationFlowerpotComponent', () => {
  let component: ConfigurationFlowerpotComponent;
  let fixture: ComponentFixture<ConfigurationFlowerpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationFlowerpotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurationFlowerpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
