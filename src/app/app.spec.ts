import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app';
import { AboutComponent } from './aboutPanel/aboutPanel';
import { BuildPanelComponent } from './buildPanel/buildPanel';
import { PrivacyPanelComponent } from './privacyPanel/privacyPanel';
import { provideLocationMocks } from '@angular/common/testing';
import { provideRouter, Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Navabout } from './navabout/navabout';
import { HomepageComponent } from './homepage/homepage';
import { RecipeList } from './recipeList/recipeList';

// Redefine the routes for the test suite
export const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyPanelComponent },
  { path: 'build', component: BuildPanelComponent },
  { path: 'category/:categorytype/:categoryvalue', component: RecipeList },
  { path: 'recipes', component: RecipeList },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
];

describe('AppComponent', () => {
  let router: Router;
  let location: Location;
  let firstAnchor: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ 
      AboutComponent,
      BuildPanelComponent,
      PrivacyPanelComponent,
      Navbar,
      Navabout,
      HomepageComponent,
      RecipeList],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(appRoutes),
        provideLocationMocks()
      ]
}).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have 'Richi's Rezeptsammlung' in the NavBar`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    firstAnchor = fixture.nativeElement.querySelector('a');
    expect(firstAnchor.textContent).toEqual("Richi's Rezeptsammlung");
  }));

  it('navigate to "" redirects you to /homepage', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/homepage');
  }));

  it('navigate to "/about" redirects you to /about', fakeAsync(() => {
    router.navigate(['/about']);
    tick();
    expect(location.path()).toBe('/about');
  }));

  it('navigate to "/privacy" redirects you to /privacy', fakeAsync(() => {
    router.navigate(['/privacy']);
    tick();
    expect(location.path()).toBe('/privacy');
  }));

  it('navigate to "/build" redirects you to /build', fakeAsync(() => {
    router.navigate(['/build']);
    tick();
    expect(location.path()).toBe('/build');
  }));

});
