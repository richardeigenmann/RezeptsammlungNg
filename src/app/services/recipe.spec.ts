import { TestBed } from '@angular/core/testing';
import { RecipeFetchService } from './recipeFetchService';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RecipeSiteService } from './recipe-site';
import { IRecipe } from '../shared/recipe';

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

  it('should correctly map recipe filenames with the site prefix', (done) => {
    const mockRawData: Partial<IRecipe>[] = [
      { filename: 'recipe1.html', imageFilename: 'img1.jpg', name: 'R1' }
    ];

    service.getRecipes().subscribe(recipes => {
      expect(recipes[0].filename).toBe('http://test-api.com/recipe1.html');
      expect(recipes[0].imageFilename).toBe('http://test-api.com/img1.jpg');
      done();
    });

    const req = httpMock.expectOne('http://test-api.com/recipes.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockRawData);
  });

  it('should handle and re-throw errors, logging to console', (done) => {
    spyOn(console, 'error');
    const errorMessage = '404 Not Found';

    service.getRecipes().subscribe({
      next: () => fail('should have failed with an error'),
      error: (error) => {
        expect(error.status).toBe(404);
        expect(console.error).toHaveBeenCalled();
        done();
      }
    });

    const req = httpMock.expectOne('http://test-api.com/recipes.json');
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });

  it('should use cached data (shareReplay) on second subscription', () => {
    service.getRecipes().subscribe();
    httpMock.expectOne('http://test-api.com/recipes.json').flush([]);

    // Second subscription should NOT trigger a new HTTP request
    service.getRecipes().subscribe();
    httpMock.expectNone('http://test-api.com/recipes.json');
  });
});
