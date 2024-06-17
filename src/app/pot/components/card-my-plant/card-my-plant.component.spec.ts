import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyPlantComponent } from './card-my-plant.component';

describe('CardMyPlantComponent', () => {
  let component: CardMyPlantComponent;
  let fixture: ComponentFixture<CardMyPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMyPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMyPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
