import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { BuildPanelComponent } from './buildPanel';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeFetchService } from '../services/recipeFetchService';
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

    await TestBed.configureTestingModule({
      imports: [BuildPanelComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: RecipeSiteService, useValue: mockRecipeSiteService },
        { provide: RecipeFetchService, useValue: mockRecipeFetchService },
        provideHttpClient(withXhr())
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
    mockRecipeFetchService.getRecipes.and.returnValue(signal([]));
    setupComponent();
    expect(component).toBeDefined();
  });

  it('should have an Angular version greater than 20.0.0', () => {
    mockRecipeFetchService.getRecipes.and.returnValue(signal([]));
    setupComponent();
    const parts = component.angularVersion.split('.');
    const major = parseInt(parts[0], 10);

    expect(major).toBeGreaterThanOrEqual(20);
  });

  it('should have the correct github.io url', () => {
    mockRecipeFetchService.getRecipes.and.returnValue(signal([]));
    setupComponent();
    expect(component.recipesUrl).toBe('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
  });

  it('should successfully populate recipes from the service signal', () => {
    const mockRecipes: IRecipe[] = [{
      name: 'Spaghetti',
      filename: 'spaghetti.html',
      imageFilename: 'spaghetti.jpg',
      width: '100',
      height: '100',
      stars: '5',
      categories: new Map([['Italian Favorites', ['Pasta']]])
    }];
    mockRecipeFetchService.getRecipes.and.returnValue(signal(mockRecipes));

    setupComponent();

    expect(component.recipes()).toEqual(mockRecipes);
  });
});

