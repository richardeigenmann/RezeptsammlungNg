import { TestBed } from '@angular/core/testing';
import { FavoriteRecipesViewService } from './favoriteRecipesViewService';
import { RecipeFetchService } from './recipeFetchService';
import { FavoriteRecipesService } from './favoriteRecipesService';
import { from, of } from 'rxjs';
import { IRecipe } from '../shared/recipe';
import { IFavorite } from '../shared/favorite';
import { provideZonelessChangeDetection, signal } from '@angular/core';

describe('FavoriteRecipesViewService', () => {
    let service: FavoriteRecipesViewService;
    let mockRecipeFetchService: { getRecipes: ReturnType<typeof vi.fn> };
    let mockFavoritesService: { getFavoritesData: ReturnType<typeof vi.fn> };

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
        mockRecipeFetchService = {
            getRecipes: vi.fn().mockName("RecipeFetchService.getRecipes")
        };
        mockFavoritesService = {
            getFavoritesData: vi.fn().mockName("FavoriteRecipesService.getFavoritesData")
        };

        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                FavoriteRecipesViewService,
                { provide: RecipeFetchService, useValue: mockRecipeFetchService },
                { provide: FavoriteRecipesService, useValue: mockFavoritesService }
            ]
        });
    });

    it('should be created', () => {
        mockRecipeFetchService.getRecipes.mockReturnValue(signal(MOCK_RECIPES as IRecipe[]));
        mockFavoritesService.getFavoritesData.mockReturnValue(from(MOCK_FAVORITES));
        service = TestBed.inject(FavoriteRecipesViewService);
        expect(service).toBeTruthy();
    });

    it('should correctly join recipes with favorite metadata', () => {
        mockRecipeFetchService.getRecipes.mockReturnValue(signal(MOCK_RECIPES as IRecipe[]));
        mockFavoritesService.getFavoritesData.mockReturnValue(from(MOCK_FAVORITES));
        service = TestBed.inject(FavoriteRecipesViewService);
        const favorites = service.favoriteRecipes();

        expect(favorites.length).toBe(2);
        expect(favorites[0].name).toBe('Pasta');
        expect(favorites[1].name).toBe('Salad');
    });

    it('should return an empty array if no recipes are loaded', () => {
        mockRecipeFetchService.getRecipes.mockReturnValue(signal([]));
        mockFavoritesService.getFavoritesData.mockReturnValue(from(MOCK_FAVORITES));

        // Create a new instance after mock is updated
        service = TestBed.inject(FavoriteRecipesViewService);

        expect(service.favoriteRecipes()).toEqual([]);
    });

    it('should return an empty array if no favorites are metadata', () => {
        mockRecipeFetchService.getRecipes.mockReturnValue(signal(MOCK_RECIPES as IRecipe[]));
        mockFavoritesService.getFavoritesData.mockReturnValue(of());

        // Create a new instance after mock is updated
        service = TestBed.inject(FavoriteRecipesViewService);

        expect(service.favoriteRecipes()).toEqual([]);
    });

    it('should handle filenames without slashes', () => {
        const recipes: Partial<IRecipe>[] = [
            { name: 'Direct', filename: 'direct.htm' }
        ];
        const favorites: IFavorite[] = [{ recipe: 'direct.htm' }];

        mockRecipeFetchService.getRecipes.mockReturnValue(signal(recipes as IRecipe[]));
        mockFavoritesService.getFavoritesData.mockReturnValue(from(favorites));

        // Create a new instance after mock is updated
        service = TestBed.inject(FavoriteRecipesViewService);

        const result = service.favoriteRecipes();
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Direct');
    });

    it('should handle recipes with empty filenames', () => {
        const recipes: Partial<IRecipe>[] = [
            { name: 'Empty', filename: '' }
        ];
        mockRecipeFetchService.getRecipes.mockReturnValue(signal(recipes as IRecipe[]));
        mockFavoritesService.getFavoritesData.mockReturnValue(from(MOCK_FAVORITES));

        // Create a new instance after mock is updated
        service = TestBed.inject(FavoriteRecipesViewService);

        const result = service.favoriteRecipes();
        expect(result.length).toBe(0);
    });
});
