import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CategoriesService } from './categories';
import { RecipeFetchService } from './recipeFetchService';
import { of, throwError } from 'rxjs';
import { IRecipe } from '../shared/recipe';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let mockRecipeFetchService: jasmine.SpyObj<RecipeFetchService>;

  const MOCK_RECIPES: Partial<IRecipe>[] = [
    {
      name: 'R1',
      categories: { 'Type': ['Pasta'], 'Cuisine': ['Italian'] } as any
    },
    {
      name: 'R2',
      categories: { 'Type': ['Pasta'], 'Cuisine': ['Swiss'] } as any
    }
  ];

  beforeEach(() => {
    mockRecipeFetchService = jasmine.createSpyObj('RecipeFetchService', ['getRecipes']);
    mockRecipeFetchService.getRecipes.and.returnValue(of(MOCK_RECIPES as IRecipe[]));

    TestBed.configureTestingModule({
      providers: [
        CategoriesService,
        { provide: RecipeFetchService, useValue: mockRecipeFetchService }
      ]
    });
  });

  it('should be created', () => {
    service = TestBed.inject(CategoriesService);
    expect(service).toBeTruthy();
  });

  it('should correctly pivot categories and count occurrences', fakeAsync(() => {
    service = TestBed.inject(CategoriesService);
    // Give the toSignal a tick to process the observable
    tick();

    const result = service.categoriesPivotSignalRO();

    expect(result.has('Type')).toBeTrue();
    expect(result.get('Type')?.get('Pasta')).toBe(2);

    expect(result.get('Cuisine')?.get('Italian')).toBe(1);
    expect(result.get('Cuisine')?.get('Swiss')).toBe(1);
  }));

  it('should handle recipes with missing or empty categories', fakeAsync(() => {
    const recipesWithMissingCats: Partial<IRecipe>[] = [
      { name: 'R1', categories: undefined },
      { name: 'R2', categories: {} as any }
    ];
    mockRecipeFetchService.getRecipes.and.returnValue(of(recipesWithMissingCats as IRecipe[]));

    service = TestBed.inject(CategoriesService);
    tick();

    const result = service.categoriesPivotSignalRO();
    expect(result.size).toBe(0);
  }));

  it('should handle multiple values for a category and empty values arrays', fakeAsync(() => {
    const mixedRecipes: Partial<IRecipe>[] = [
      {
        name: 'R1',
        categories: { 'Type': ['Pasta', 'Main'], 'Cuisine': [] } as any
      }
    ];
    mockRecipeFetchService.getRecipes.and.returnValue(of(mixedRecipes as IRecipe[]));

    service = TestBed.inject(CategoriesService);
    tick();

    const result = service.categoriesPivotSignalRO();
    
    expect(result.get('Type')?.get('Pasta')).toBe(1);
    expect(result.get('Type')?.get('Main')).toBe(1);
    expect(result.get('Cuisine')?.size).toBe(0);
  }));

  it('should handle error when fetching recipes and return an empty pivot map', fakeAsync(() => {
    spyOn(console, 'error'); // Spy on console.error to check if it's called
    const errorMsg = 'Failed to load recipes for categories';
    mockRecipeFetchService.getRecipes.and.returnValue(throwError(() => new Error(errorMsg)));

    // Injecting the service now will use the throwError mock
    service = TestBed.inject(CategoriesService);
    tick(); // Allow toSignal to process the error

    const result = service.categoriesPivotSignalRO();

    expect(result.size).toBe(0); // Expect an empty map as per catchError(of([]))
    expect(console.error).toHaveBeenCalledWith('CategoriesService data fetch error:', jasmine.any(Error));
  }));
});
