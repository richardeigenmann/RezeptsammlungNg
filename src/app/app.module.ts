import { Routes } from '@angular/router';

import { CarouselComponent } from './home/carousel.component';
import { AboutComponent } from './home/about.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { BuildComponent } from './home/build/build.component';
import { HomepageComponent } from './homepage/homepage.component';


export const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'build', component: BuildComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
];


