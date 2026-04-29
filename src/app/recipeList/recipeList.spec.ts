import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RecipeList } from './recipeList';
import { RecipeFetchService } from '../services/recipeFetchService';
import { ActivatedRoute, Params } from '@angular/router';
import { FilterService } from '../services/filter';
import { IRecipe } from '../shared/recipe';
import { of, Subject, throwError } from 'rxjs';
import { Tdrecipe } from './tdrecipe/tdrecipe';

describe('RecipeList', () => {
  let component: RecipeList;
  let fixture: ComponentFixture<RecipeList>;
  let mockRecipeFetchService: jasmine.SpyObj<RecipeFetchService>;
  let mockActivatedRoute: { params: Subject<Params> };
  let mockFilterService: { announcedSearch$: Subject<string> };

  const MOCK_RECIPES: IRecipe[] = [
    {
      name: 'Spaghetti Carbonara',
      filename: 'spaghetti.html',
      imageFilename: 'spaghetti.jpg',
      width: '100',
      height: '100',
      stars: '5',
      categories: new Map([['Type', ['Pasta']], ['Cuisine', ['Italian']]])
    },
    {
      name: 'Chicken Curry',
      filename: 'curry.html',
      imageFilename: 'curry.jpg',
      width: '100',
      height: '100',
      stars: '4',
      categories: new Map([['Type', ['Main Course']], ['Cuisine', ['Indian']]])
    },
    {
      name: 'Tomato Soup',
      filename: 'soup.html',
      imageFilename: 'soup.jpg',
      width: '100',
      height: '100',
      stars: '3',
      categories: new Map([['Type', ['Soup']], ['Cuisine', ['Vegetarian']]])
    }
  ];

  beforeEach(async () => {
    mockRecipeFetchService = jasmine.createSpyObj('RecipeFetchService', ['getRecipes']);
    mockActivatedRoute = { params: new Subject<Params>() };
    mockFilterService = { announcedSearch$: new Subject<string>() };

    // Default mock behavior
    mockRecipeFetchService.getRecipes.and.returnValue(of(MOCK_RECIPES));

    await TestBed.configureTestingModule({
      imports: [RecipeList, Tdrecipe], // Ensure Tdrecipe is imported as it's used in the template
      providers: [
        { provide: RecipeFetchService, useValue: mockRecipeFetchService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: FilterService, useValue: mockFilterService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeList);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Initial change detection to trigger signal subscriptions
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load recipes on init', fakeAsync(() => {
    // Ensure getRecipes was called
    expect(mockRecipeFetchService.getRecipes).toHaveBeenCalled();

    // Advance time for the observable to emit and toSignal to update
    tick();

    // Check that recipes signal is populated
    expect(component.recipes()).toEqual(MOCK_RECIPES);
    expect(component.filteredRecipes()).toEqual(MOCK_RECIPES);
  }));

  it('should handle error when fetching recipes', fakeAsync(() => {
    const errorMsg = 'Failed to fetch!';
    mockRecipeFetchService.getRecipes.and.returnValue(throwError(() => new Error(errorMsg)));

    // Re-create component to pick up new mock behavior
    fixture = TestBed.createComponent(RecipeList);
    component = fixture.componentInstance;
    fixture.detectChanges();

    tick();

    expect(component.recipes()).toEqual([]);
    // The error message is currently only logged to console, not stored in a signal in RecipeList.
    // If you add an errorMessage signal to RecipeList, you would test it here.
    // For now, we just ensure recipes is empty.
  }));

  it('should filter recipes by search term', fakeAsync(() => {
    tick(); // Ensure initial recipes are loaded
    expect(component.filteredRecipes().length).toBe(3);

    mockFilterService.announcedSearch$.next('spaghetti');
    tick();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Spaghetti Carbonara');

    mockFilterService.announcedSearch$.next('soup');
    tick();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Tomato Soup');

    mockFilterService.announcedSearch$.next('');
    tick();

    expect(component.filteredRecipes().length).toBe(3);
  }));

  it('should filter recipes by category from route params', fakeAsync(() => {
    tick(); // Ensure initial recipes are loaded
    expect(component.filteredRecipes().length).toBe(3);

    mockActivatedRoute.params.next({ categorytype: 'Cuisine', categoryvalue: 'Italian' });
    tick();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Spaghetti Carbonara');

    mockActivatedRoute.params.next({ categorytype: 'Type', categoryvalue: 'Soup' });
    tick();

    expect(component.filteredRecipes().length).toBe(1);
    expect(component.filteredRecipes()[0].name).toBe('Tomato Soup');

    mockActivatedRoute.params.next({}); // No category filter
    tick();

    expect(component.filteredRecipes().length).toBe(3);
  }));

  it('should call onRatingClicked and log a message', () => {
    spyOn(console, 'log');
    component.onRatingClicked('Test Message');
    expect(console.log).toHaveBeenCalledWith('Product List: Test Message');
  });
});
