import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CategoriesService } from './categories';
import { RecipeFetchService } from './recipeFetchService';
import { of } from 'rxjs';
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
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly pivot categories and count occurrences', fakeAsync(() => {
    // Give the toSignal a tick to process the observable
    tick();

    const result = service.categoriesPivotSignalRO();

    expect(result.has('Type')).toBeTrue();
    expect(result.get('Type')?.get('Pasta')).toBe(2);

    expect(result.get('Cuisine')?.get('Italian')).toBe(1);
    expect(result.get('Cuisine')?.get('Swiss')).toBe(1);
  }));

});
