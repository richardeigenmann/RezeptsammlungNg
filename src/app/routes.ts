import { Routes } from '@angular/router';

import { AboutComponent } from './home/about';
import { PrivacyComponent } from './home/privacy/privacy';
import { BuildComponent } from './home/build/build';
import { HomepageComponent } from './homepage/homepage';
import { RecipeList } from './recipe/recipe-list';


export const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'build', component: BuildComponent },
  { path: 'category/:categorytype/:categoryvalue', component: RecipeList },
  { path: 'recipes', component: RecipeList },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
];


