import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlantComponent } from './card-plant.component';

describe('CardPlantComponent', () => {
  let component: CardPlantComponent;
  let fixture: ComponentFixture<CardPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
