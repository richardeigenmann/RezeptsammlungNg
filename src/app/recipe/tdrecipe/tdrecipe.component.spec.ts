import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdrecipeComponent } from './tdrecipe.component';

import { IRecipe } from 'src/app/shared/recipe';


const testMap = new Map<string, string[]>([
  ['fruits', ['apple', 'banana', 'orange']],
  ['vegetables', ['carrot', 'potato', 'tomato']]
]);

let testRecipe: IRecipe = {
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
