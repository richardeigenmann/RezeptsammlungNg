import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { BuildPanelComponent } from './buildPanel';
import { provideHttpClient } from '@angular/common/http';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeFetchService } from '../services/recipeFetchService';
import { of, throwError } from 'rxjs';
import { IRecipe } from '../shared/recipe';

describe('BuildPanelComponent', () => {
  let component: BuildPanelComponent;
  let fixture: ComponentFixture<BuildPanelComponent>;
  let mockRecipeSiteService: jasmine.SpyObj<RecipeSiteService>;
  let mockRecipeFetchService: jasmine.SpyObj<RecipeFetchService>;

  beforeEach(async () => {
    mockRecipeSiteService = jasmine.createSpyObj('RecipeSiteService', ['getRecipeSite', 'getRecipesUrl']);
    mockRecipeFetchService = jasmine.createSpyObj('RecipeFetchService', ['getRecipes']);

    // Default mock behavior
    mockRecipeSiteService.getRecipesUrl.and.returnValue('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
    mockRecipeSiteService.getRecipeSite.and.returnValue('https://site.com');
    mockRecipeFetchService.getRecipes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [BuildPanelComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: RecipeSiteService, useValue: mockRecipeSiteService },
        { provide: RecipeFetchService, useValue: mockRecipeFetchService },
        provideHttpClient()
      ]
    }).compileComponents();
  });

  // Helper to initialize the component AFTER mocks are configured for specific tests
  function setupComponent() {
    fixture = TestBed.createComponent(BuildPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create the component', () => {
    setupComponent();
    expect(component).toBeDefined();
  });

  it('should have an Angular version greater than 20.0.0', () => {
    setupComponent();
    const parts = component.angularVersion.split('.');
    const major = parseInt(parts[0], 10);

    expect(major).toBeGreaterThanOrEqual(20);
  });

  it('should have the correct github.io url', () => {
    setupComponent();
    expect(component.recipesUrl).toBe('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
  });

  it('should handle error when fetching recipes and set errorMessage', () => {
    const errorMsg = 'Failed to load recipes';
    mockRecipeFetchService.getRecipes.and.returnValue(throwError(() => new Error(errorMsg)));

    setupComponent();

    expect(component.errorMessage()).toBe(errorMsg);
    expect(component.recipes()).toEqual([]); // Should fall back to empty array via catchError
  });

  it('should successfully populate recipes from the service', () => {
    const mockRecipes: IRecipe[] = [{
      name: 'Spaghetti',
      filename: 'spaghetti.html',
      imageFilename: 'spaghetti.jpg', // Added missing property
      width: '100',                   // Changed number to string
      height: '100',                  // Changed number to string
      stars: '5',                       // Added missing property
      categories: new Map([['Italian Favorites', ['Pasta']]])
    }];
    mockRecipeFetchService.getRecipes.and.returnValue(of(mockRecipes));

    setupComponent();

    expect(component.recipes()).toEqual(mockRecipes);
    expect(component.errorMessage()).toBe('');
  });
});
