import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BuildComponent } from './build';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RecipeSiteService } from '../../services/recipe-site';
import { RecipeFetchService } from '../../services/recipeFetchService';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;
  let recipeSiteService: RecipeSiteService;
  let recipeService: RecipeFetchService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [BuildComponent],
    providers: [RecipeSiteService, RecipeFetchService, provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    recipeSiteService = TestBed.inject(RecipeSiteService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Angular version greater than 17.0.0', () => {
    const parts = component.angularVersion.split('.');
    const major = parseInt(parts[0], 10);
    
    expect(major).toBeGreaterThanOrEqual(17);
  });

  it('should have the correct github.io url', () => {
    let url = ''
    url = recipeSiteService.getRecipesUrl();

    expect(url).toBe('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
  });

  it('should use the RecipeService', () => {
    recipeService = TestBed.inject(RecipeFetchService);
    expect(recipeService.getRecipes()).toBeTruthy();
  });

  //TODO: Write a test that proves that the data is coming back from the recipe service

});
