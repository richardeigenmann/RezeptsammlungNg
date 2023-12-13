
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from '../favourites/favourites.component'
import { StatsComponent } from '../stats/stats.component'


describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent, SimpleRecipeListComponent, FavouritesComponent, StatsComponent ],
      imports: [HttpClientModule ], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
