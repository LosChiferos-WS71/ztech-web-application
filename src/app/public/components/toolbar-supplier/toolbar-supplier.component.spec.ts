import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSupplierComponent } from './toolbar-supplier.component';

describe('ToolbarSupplierComponent', () => {
  let component: ToolbarSupplierComponent;
  let fixture: ComponentFixture<ToolbarSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarSupplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
