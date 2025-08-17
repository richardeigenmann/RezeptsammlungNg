
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomepageComponent } from './homepage';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { StatsComponent } from '../stats/stats.component'

// Stubs for child components to isolate the HomepageComponent during testing
@Component({ selector: 'pm-simple-recipe-list', template: '', standalone: true })
class SimpleRecipeListStubComponent {}

@Component({ selector: 'pm-favourites', template: '', standalone: true })
class FavouritesStubComponent {}

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let compiled: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        StatsComponent,
        SimpleRecipeListStubComponent,
        FavouritesStubComponent,
        HomepageComponent,
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the stats section with the correct title', () => {
    const h3 = compiled.querySelector('pm-stats h3');
    expect(h3).toBeTruthy();
    expect(h3.textContent).toContain('Nachgefragte Rezepte:');
  });

  it('should display 10 recipe stats', () => {
    // The `stats.component` template has a header row plus one row per recipe.
    // The real `StatsService` provides 10 recipes.
    const rows = compiled.querySelectorAll('pm-stats table tbody tr');
    expect(rows.length - 1).toBe(10);
  });
});
