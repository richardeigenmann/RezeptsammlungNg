import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appRoutes } from './app/app.module';
import { environment } from './environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RecipeModule } from './app/recipe/recipe.module';
import { provideRouter, Routes } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';
import { CarouselComponent } from './app/home/carousel.component';
import { AboutComponent } from './app/home/about.component';
import { PrivacyComponent } from './app/home/privacy/privacy.component';
import { BuildComponent } from './app/home/build/build.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, RecipeModule, NgbModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(appRoutes)
    ]
});
