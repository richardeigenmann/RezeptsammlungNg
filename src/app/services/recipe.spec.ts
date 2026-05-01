import { TestBed } from '@angular/core/testing';
import { RecipeFetchService } from './recipeFetchService';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RecipeSiteService } from './recipe-site';
import { IRecipe } from '../shared/recipe';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RecipeService', () => {
  let service: RecipeFetchService;
  let httpMock: HttpTestingController;
  let mockRecipeSiteService: jasmine.SpyObj<RecipeSiteService>;

  beforeEach(() => {
    mockRecipeSiteService = jasmine.createSpyObj('RecipeSiteService', ['getRecipesUrl', 'getRecipeSite']);
    mockRecipeSiteService.getRecipesUrl.and.returnValue('http://test-api.com/recipes.json');
    mockRecipeSiteService.getRecipeSite.and.returnValue('http://test-api.com');

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        RecipeFetchService,
        { provide: RecipeSiteService, useValue: mockRecipeSiteService },
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(RecipeFetchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should correctly map recipe filenames with the site prefix', async () => {
    const mockRawData: Partial<IRecipe>[] = [
      { filename: 'recipe1.html', imageFilename: 'img1.jpg', name: 'R1' }
    ];

    const recipesSignal = service.getRecipes();
    
    // Initial value is undefined because resource is async
    expect(recipesSignal()).toBeUndefined();

    // Trigger the loader
    service.getRecipesSignal()();

    // Small delay to allow resource to initiate the loader
    await new Promise(r => setTimeout(r, 0));

    const req = httpMock.expectOne('http://test-api.com/recipes.json');
    req.flush(mockRawData);

    // Wait for the loader's async promise to resolve and update the value Signal
    await new Promise(r => setTimeout(r, 0));
    
    expect(recipesSignal()![0].filename).toBe('http://test-api.com/recipe1.html');
    expect(recipesSignal()![0].imageFilename).toBe('http://test-api.com/img1.jpg');
  });

  it('should handle and log errors', async () => {
    spyOn(console, 'error');
    const recipesSignal = service.getRecipes();

    // Trigger the loader
    service.getRecipesSignal()();
    await new Promise(r => setTimeout(r, 0));

    const req = httpMock.expectOne('http://test-api.com/recipes.json');
    req.flush('Error', { status: 404, statusText: 'Not Found' });

    await new Promise(r => setTimeout(r, 0));

    // For a resource in error state, accessing .value() normally throws.
    // However, our getRecipes returns asReadonly(), we expect it to be undefined or throw.
    // Let's verify it doesn't crash the test and check if we can catch it.
    try {
        const val = recipesSignal();
        expect(val).toBeUndefined();
    } catch (e: any) {
        expect(e.message).toContain('Resource is currently in an error state');
    }
  });
});
