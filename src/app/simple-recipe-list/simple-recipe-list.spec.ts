import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleRecipeListComponent } from './simple-recipe-list';
import { RecipeFetchService } from '../services/recipeFetchService';
import { IRecipe, Recipe } from '../shared/recipe';
import { provideZonelessChangeDetection, signal, WritableSignal } from '@angular/core';

describe('SimpleRecipeListComponent', () => {
  let component: SimpleRecipeListComponent;
  let fixture: ComponentFixture<SimpleRecipeListComponent>;
  let mockRecipeService: jasmine.SpyObj<RecipeFetchService>;
  let compiled: HTMLElement;
  let mockRecipesSignal: WritableSignal<IRecipe[]>;

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

  beforeEach(async () => {
    mockRecipeService = jasmine.createSpyObj('RecipeService', ['getRecipes']);
    mockRecipesSignal = signal<IRecipe[]>([]);
    mockRecipeService.getRecipes.and.returnValue(mockRecipesSignal);

    await TestBed.configureTestingModule({
      imports: [SimpleRecipeListComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: RecipeFetchService, useValue: mockRecipeService },
      ],
    }).compileComponents();
  });

  function setupComponent() {
    fixture = TestBed.createComponent(SimpleRecipeListComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  }

  it('should create', () => {
    setupComponent();
    expect(component).toBeTruthy();
  });

  describe('with successful recipe fetch', () => {
    beforeEach(() => {
      mockRecipesSignal.set(mockRecipes);
      setupComponent();
      fixture.detectChanges();
    });

    it('should display recipes from the service signal', () => {
      expect(component.recipes().length).toBe(2);
      expect(component.recipes()[0].name).toBe('Spaghetti Carbonara');
    });

    it('should render the recipe list in the template', () => {
      const links = compiled.querySelectorAll('a');
      expect(links.length).toBe(2);
      expect(links[0].textContent).toContain('Spaghetti Carbonara');
    });
  });

  describe('with empty recipe fetch', () => {
    beforeEach(() => {
      mockRecipesSignal.set([]);
      setupComponent();
      fixture.detectChanges();
    });

    it('should handle empty recipes signal', () => {
      expect(component.recipes().length).toBe(0);
    });

    it('should not render any recipes in the template', () => {
      const links = compiled.querySelectorAll('a');
      expect(links.length).toBe(0);
    });
  });
});
