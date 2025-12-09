import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { SimpleRecipeListComponent } from './simple-recipe-list';
import { RecipeFetchService } from '../services/recipeFetchService';
import { RecipeSiteService } from '../services/recipe-site';
import { IRecipe, Recipe } from '../shared/recipe';

describe('SimpleRecipeListComponent', () => {
  let component: SimpleRecipeListComponent;
  let fixture: ComponentFixture<SimpleRecipeListComponent>;
  let mockRecipeService: jasmine.SpyObj<RecipeFetchService>;
  let mockRecipeSiteService: jasmine.SpyObj<RecipeSiteService>;
  let compiled: HTMLElement;

  const mockRecipes: IRecipe[] = [
      new Recipe(
        "pasta-carbonara.jpg",
        "Spaghetti Carbonara",
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
      )
    ];

  beforeEach(waitForAsync(() => {
    mockRecipeService = jasmine.createSpyObj('RecipeService', ['getRecipes']);

    TestBed.configureTestingModule({
      imports: [SimpleRecipeListComponent],
      providers: [
        { provide: RecipeFetchService, useValue: mockRecipeService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRecipeListComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('with successful recipe fetch', () => {
    beforeEach(() => {
      mockRecipeService.getRecipes.and.returnValue(of(mockRecipes));
      fixture.detectChanges(); // triggers ngOnInit
    });

    it('should fetch and process recipes on init', () => {
      expect(mockRecipeService.getRecipes).toHaveBeenCalled();
      expect(component.recipes.length).toBe(2);
      expect(component.recipes[0].name).toBe('Spaghetti Carbonara');
      expect(component.recipes[0].filename).toBe('pasta-carbonara.jpg');
      expect(component.recipes[0].imageFilename).toBe('carbonara.jpg');
    });

    it('should render the recipe list in the template', () => {
      const links = compiled.querySelectorAll('a');
      expect(links.length).toBe(2);
      expect(links[0].textContent).toContain('Spaghetti Carbonara');
      expect(links[0].getAttribute('href')).toBe('pasta-carbonara.jpg');
      expect(links[1].textContent).toContain('Chicken Tikka Masala');
      expect(links[1].getAttribute('href')).toBe('chicken-tikka-masala.jpg');
    });
  });

  describe('with failed recipe fetch', () => {
    beforeEach(() => {
      mockRecipeService.getRecipes.and.returnValue(throwError(() => new Error('test error')));
      fixture.detectChanges(); // triggers ngOnInit
    });

    it('should set an error message on failed recipe fetch', () => {
      expect(mockRecipeService.getRecipes).toHaveBeenCalled();
      expect(component.recipes.length).toBe(0);
      expect(component.errorMessage).toBe('test error');
    });

    it('should not render any recipes in the template', () => {
      const links = compiled.querySelectorAll('a');
      expect(links.length).toBe(0);
    });
  });
});
