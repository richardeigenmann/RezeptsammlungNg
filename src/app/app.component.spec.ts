import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about.component';
import { BuildComponent } from './home/build/build.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { appRoutes} from "./app.module"
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuaboutComponent } from './menuabout/menuabout.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    RouterTestingModule.withRoutes(appRoutes),
    HttpClientModule,
  ],
  declarations: [],
})
export class DynamicTestModule {}

describe('AppComponent', () => {
  let router: Router;
  let location: Location;
  let firstAnchor: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        HttpClientModule,
      ],
      declarations: [
        AboutComponent, 
        BuildComponent, 
        PrivacyComponent,
        NavbarComponent, 
        MenuaboutComponent,      
      ],
      providers: []
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have 'Richi's Rezeptsammlung' in the NavBar`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
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
