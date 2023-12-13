import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleRecipeListComponent } from './simple-recipe-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('RecipeListComponent', () => {
  let component: SimpleRecipeListComponent;
  let fixture: ComponentFixture<SimpleRecipeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRecipeListComponent ],
      imports: [HttpClientModule ], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
