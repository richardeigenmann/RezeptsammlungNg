import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubRecipeListComponent } from './sub-recipe-list.component';

describe('RecipeListComponent', () => {
  let component: SubRecipeListComponent;
  let fixture: ComponentFixture<SubRecipeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRecipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
