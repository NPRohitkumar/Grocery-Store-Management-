import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBlogs } from './food-blogs';

describe('FoodBlogs', () => {
  let component: FoodBlogs;
  let fixture: ComponentFixture<FoodBlogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodBlogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodBlogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
