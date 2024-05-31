import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedPotComponent } from './loaded-pot.component';

describe('LoadedPotComponent', () => {
  let component: LoadedPotComponent;
  let fixture: ComponentFixture<LoadedPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadedPotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadedPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
