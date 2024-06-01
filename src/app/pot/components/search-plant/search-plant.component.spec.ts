import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlantComponent } from './search-plant.component';

describe('SearchPlantComponent', () => {
  let component: SearchPlantComponent;
  let fixture: ComponentFixture<SearchPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
