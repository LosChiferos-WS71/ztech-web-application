import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlantComponent } from './choose-plant.component';

describe('ChoosePlantComponent', () => {
  let component: ChoosePlantComponent;
  let fixture: ComponentFixture<ChoosePlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
