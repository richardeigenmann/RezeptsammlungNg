import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BuildComponent } from './build';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RecipeSiteService } from '../../services/recipe-site';
import { RecipeService } from '../../services/recipeFetchService';
//import { IRecipe, Recipe } from '../../shared/recipe';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;
  let recipeSiteService: RecipeSiteService;
  let recipeService: RecipeService;
  /*const mockRecipes: IRecipe[] = [
    new Recipe(
      "pasta-carbonara.jpg",
      "Classic Spaghetti Carbonara",
      "carbonara.jpg",
      "600",
      "400",
      "4.5",
      new Map([
        ["Main Course", ["Italian", "Pasta"]],
        ["Dietary", ["Vegetarian"]],
      ])
    ),
    new Recipe(
      "chicken-tikka-masala.jpg",
      "Chicken Tikka Masala",
      "chicken-tikka.jpg",
      "800",
      "600",
      "4.8",
      new Map([
        ["Main Course", ["Indian", "Chicken"]],
      ])
    ),
    new Recipe(
      "chocolate-chip-cookies.jpg",
      "Chewy Chocolate Chip Cookies",
      "cookies.jpg",
      "400",
      "400",
      "5.0",
      new Map([
        ["Dessert", ["Cookies"]],
        ["Dietary", ["Sweet"]],
      ])
    ),
  ];*/


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [BuildComponent],
    providers: [RecipeSiteService, RecipeService, provideHttpClient(withInterceptorsFromDi())]
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
    recipeService = TestBed.inject(RecipeService);
    expect(recipeService.getRecipes()).toBeTruthy();
  });

  //TODO: Write a test that proves that the data is coming back from the recipe service

});
