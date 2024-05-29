import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFlowerpotComponent } from './config-flowerpot.component';

describe('ConfigFlowerpotComponent', () => {
  let component: ConfigFlowerpotComponent;
  let fixture: ComponentFixture<ConfigFlowerpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigFlowerpotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigFlowerpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
