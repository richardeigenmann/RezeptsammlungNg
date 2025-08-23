import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouritesRecipesComponent } from './favouriteRecipes';
import { FavoriteRecipesViewService } from '../services/favoriteRecipesViewService';
import { of } from 'rxjs'; // Import the 'of' operator
import { IRecipe } from '../shared/recipe';

// Create a mock service to control the data
class MockFavoriteRecipesViewService {
  getFavoriteRecipes() {
    // Return a mock observable that emits a specific set of data
    const mockRecipes: IRecipe[] = [
      {
        filename: 'rcp1.htm', name: 'Recipe 1', imageFilename: 'img1.jpg', width: '100', height: '100', stars: '5', categories: new Map()
      },
      {
        filename: 'rcp2.htm', name: 'Recipe 2', imageFilename: 'img2.jpg', width: '100', height: '100', stars: '4', categories: new Map()
      }
    ];
    return of(mockRecipes);
  }
}

describe('FavouritesRecipesComponent', () => {
  let component: FavouritesRecipesComponent;
  let fixture: ComponentFixture<FavouritesRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouritesRecipesComponent],
      providers: [
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
    // Call ngOnInit to trigger the subscription
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate favouriteRecipes with data from the service', () => {
    // Check that the component's array is populated
    expect(component.favoriteRecipes.length).toBe(2);
    expect(component.favoriteRecipes[0].name).toBe('Recipe 1');
  });
});