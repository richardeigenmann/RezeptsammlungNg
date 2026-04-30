import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouritesRecipesComponent } from './favouriteRecipes';
import { FavoriteRecipesViewService } from '../services/favoriteRecipesViewService';
import { IRecipe } from '../shared/recipe';
import { DebugElement, provideZonelessChangeDetection, signal } from '@angular/core';
import { By } from '@angular/platform-browser';

// Create a mock service to control the data
class MockFavoriteRecipesViewService {
  favoriteRecipes = signal<IRecipe[]>(
    [
      {
        filename: 'rcp1.htm', name: 'Recipe 1', imageFilename: 'img1.jpg', width: '100', height: '100', stars: '5', categories: new Map()
      },
      {
        filename: 'rcp2.htm', name: 'Recipe 2', imageFilename: 'img2.jpg', width: '100', height: '100', stars: '4', categories: new Map()
      }
    ]
  );
}

describe('FavouritesRecipesComponent', () => {
  let component: FavouritesRecipesComponent;
  let fixture: ComponentFixture<FavouritesRecipesComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouritesRecipesComponent],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: FavoriteRecipesViewService,
          useClass: MockFavoriteRecipesViewService
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesRecipesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    // Call ngOnInit to trigger the subscription
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate favouriteRecipes with data from the service', () => {
    const recipeLinks = debugElement.queryAll(By.css('a'));
    expect(recipeLinks.length).toBe(2);
  });

  it('should display the correct recipe names and links', () => {
    const recipeLinks = debugElement.queryAll(By.css('a'));

    expect(recipeLinks[0].nativeElement.textContent).toContain('Recipe 1');
    expect(recipeLinks[0].nativeElement.href).toContain('rcp1.htm');

    expect(recipeLinks[1].nativeElement.textContent).toContain('Recipe 2');
    expect(recipeLinks[1].nativeElement.href).toContain('rcp2.htm');
  });
});
