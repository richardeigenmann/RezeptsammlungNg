import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TdrecipeComponent } from './tdrecipe.component';
import { IRecipe } from 'src/app/shared/recipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

const testMap = new Map<string, string[]>([
  ['fruits', ['apple', 'banana', 'orange']],
  ['vegetables', ['carrot', 'potato', 'tomato']]
]);

const testRecipe: IRecipe = {
  filename: 'my-filename.htm',
      name: 'my-recipe-name',
      imageFilename: 'my-image.jpg',
      width: '200',
      height: '200',
      categories: testMap,
      stars: '4'
}

describe('TdrecipeComponent', () => {
  let component: TdrecipeComponent;
  let fixture: ComponentFixture<TdrecipeComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [TdrecipeComponent],
      imports: [NgbRatingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(TdrecipeComponent);
    component = fixture.componentInstance;
    component.myRecipe = testRecipe;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
