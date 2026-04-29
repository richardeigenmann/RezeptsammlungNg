import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildPanelComponent } from './buildPanel';
import { provideHttpClient } from '@angular/common/http';
import { RecipeSiteService } from '../services/recipe-site';
import { RecipeFetchService } from '../services/recipeFetchService';
import { of } from 'rxjs';

describe('BuildPanelComponent', () => {
  let component: BuildPanelComponent;
  let fixture: ComponentFixture<BuildPanelComponent>;

const mockRecipeSiteService = jasmine.createSpyObj('RecipeSiteService',
  ['getRecipeSite', 'getRecipesUrl', 'getRecipes']
);

mockRecipeSiteService.getRecipesUrl.and.returnValue('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
mockRecipeSiteService.getRecipes.and.returnValue(of([]));

beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildPanelComponent],
      providers: [
        { provide: RecipeSiteService, useValue: mockRecipeSiteService },
        provideHttpClient() // Standard modern provider
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(BuildPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it('should have an Angular version greater than 17.0.0', () => {
    const parts = component.angularVersion.split('.');
    const major = parseInt(parts[0], 10);

    expect(major).toBeGreaterThanOrEqual(17);
  });

  it('should have the correct github.io url', () => {
    const service = TestBed.inject(RecipeSiteService);
    const url = service.getRecipesUrl();
    expect(url).toBe('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
  });

  it('should use the RecipeService', () => {
    const recipeService = TestBed.inject(RecipeFetchService);
    expect(recipeService.getRecipes()).toBeTruthy();
  });

  //TODO: Write a test that proves that the data is coming back from the recipe service

});
