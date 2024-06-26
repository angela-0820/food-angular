import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFoodComponent } from './page-food.component';

describe('PageFoodComponent', () => {
  let component: PageFoodComponent;
  let fixture: ComponentFixture<PageFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
