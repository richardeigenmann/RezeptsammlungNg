import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FavoriteRecipesViewService } from './favoriteRecipesViewService';
import { RecipeFetchService } from './recipeFetchService';
import { FavoriteRecipesService } from './favoriteRecipesService';
import { of, from } from 'rxjs';
import { IRecipe } from '../shared/recipe';
import { IFavorite } from '../shared/favorite';

describe('FavoriteRecipesViewService', () => {
  let service: FavoriteRecipesViewService;
  let mockRecipeFetchService: jasmine.SpyObj<RecipeFetchService>;
  let mockFavoritesService: jasmine.SpyObj<FavoriteRecipesService>;

  const MOCK_RECIPES: Partial<IRecipe>[] = [
    { name: 'Pasta', filename: 'http://site.com/pasta.htm' },
    { name: 'Pizza', filename: 'http://site.com/pizza.htm' },
    { name: 'Salad', filename: 'http://site.com/salad.htm' }
  ];

  const MOCK_FAVORITES: IFavorite[] = [
    { recipe: 'pasta.htm' },
    { recipe: 'salad.htm' }
  ];

  beforeEach(() => {
    mockRecipeFetchService = jasmine.createSpyObj('RecipeFetchService', ['getRecipes']);
    mockFavoritesService = jasmine.createSpyObj('FavoriteRecipesService', ['getFavoritesData']);

    // Default mock setup
    mockRecipeFetchService.getRecipes.and.returnValue(of(MOCK_RECIPES as IRecipe[]));
    mockFavoritesService.getFavoritesData.and.returnValue(from(MOCK_FAVORITES));

    TestBed.configureTestingModule({
      providers: [
        FavoriteRecipesViewService,
        { provide: RecipeFetchService, useValue: mockRecipeFetchService },
        { provide: FavoriteRecipesService, useValue: mockFavoritesService }
      ]
    });
  });

  it('should be created', () => {
    service = TestBed.inject(FavoriteRecipesViewService);
    expect(service).toBeTruthy();
  });

  it('should correctly join recipes with favorite metadata', fakeAsync(() => {
    service = TestBed.inject(FavoriteRecipesViewService);
    tick(); // Wait for Signals to initialize from Observables

    const favorites = service.favoriteRecipes();

    expect(favorites.length).toBe(2);
    expect(favorites[0].name).toBe('Pasta');
    expect(favorites[1].name).toBe('Salad');
  }));

  it('should return an empty array if no recipes are loaded', fakeAsync(() => {
    mockRecipeFetchService.getRecipes.and.returnValue(of([]));
    service = TestBed.inject(FavoriteRecipesViewService);
    tick();

    expect(service.favoriteRecipes()).toEqual([]);
  }));
});
