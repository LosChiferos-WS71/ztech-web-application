import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAcceptOrderComponent } from './dialog-accept-order.component';

describe('DialogAcceptOrderComponent', () => {
  let component: DialogAcceptOrderComponent;
  let fixture: ComponentFixture<DialogAcceptOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAcceptOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAcceptOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
