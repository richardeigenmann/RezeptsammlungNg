import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app';
import { AboutComponent } from './home/about';
import { BuildComponent } from './home/build/build';
import { PrivacyComponent } from './home/privacy/privacy';
import { appRoutes} from "./routes"
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Menuabout } from './menuabout/menuabout';
import { NgModule } from '@angular/core';


@NgModule({ declarations: [], imports: [RouterTestingModule.withRoutes(appRoutes)], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class DynamicTestModule {}

describe('AppComponent', () => {
  let router: Router;
  let location: Location;
  let firstAnchor: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes(appRoutes), AboutComponent,
        BuildComponent,
        PrivacyComponent,
        Navbar,
        Menuabout],
    providers: [provideHttpClient(withInterceptorsFromDi())]
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
