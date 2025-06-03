import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FavouritesComponent } from './favourites.component';
import { FavoritesService, IFavoriteRecipe } from '../services/favorites.service ';
import { Observable } from 'rxjs';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;
  let service: FavoritesService;
  let observable: Observable<IFavoriteRecipe>; // Changed here

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesComponent],
      providers: [FavoritesService]
    })
      .compileComponents();
    service = TestBed.inject(FavoritesService);
    observable = service.getFavoritesData();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an array of favorite recipes', () => {
    const recipes: IFavoriteRecipe[] = []; // Changed here
    observable.subscribe((data: IFavoriteRecipe) => { // Changed here
      recipes.push(data);
      expect(data).toBeTruthy();
      expect(data.id).toBeDefined();
      expect(data.name).toBeDefined();
      expect(data.url).toBeDefined();
    });
    expect(recipes.length).toBeGreaterThan(0);
  });

});
