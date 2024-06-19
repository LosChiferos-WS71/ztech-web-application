import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateClaimComponent } from './generate-claim.component';

describe('GenerateClaimComponent', () => {
  let component: GenerateClaimComponent;
  let fixture: ComponentFixture<GenerateClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateClaimComponent]
    });
    fixture = TestBed.createComponent(GenerateClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
