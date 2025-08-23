import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app';
import { AboutComponent } from './app/aboutPanel/aboutPanel';
import { PrivacyPanelComponent } from './app/privacyPanel/privacyPanel';
import { BuildPanelComponent } from './app/buildPanel/buildPanel';
import { HomepageComponent } from './app/homepage/homepage';
import { RecipeList } from './app/recipeList/recipeList';

if (environment.production) {
  enableProdMode();
}

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


bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(appRoutes)
    ]
});
