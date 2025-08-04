import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FavouritesComponent } from './favourites.component';
import { FavoritesService } from '../services/favorites.service ';
import { Observable } from 'rxjs';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;
  let service: FavoritesService;
  let observable: Observable<any[]>;

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
    const recipes = []
    observable.subscribe(data => {
      recipes.push(data);
      expect(data).toBeTruthy();
    });
    expect(recipes.length).toBeGreaterThan(0);
  });

});
