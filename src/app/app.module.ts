import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarouselComponent } from './home/carousel.component';
import { RecipeModule } from './recipe/recipe.module';
import { AboutComponent } from './home/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncodeURI } from './shared/encodeUri.pipe';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { BuildComponent } from './home/build/build.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SimpleRecipeListComponent } from './simple-recipe-list/simple-recipe-list.component';
import { StatsComponent } from './stats/stats.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MenuaboutComponent } from './menuabout/menuabout.component';


export const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'build', component: BuildComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({ declarations: [
        // AppComponent, // Now standalone
        // CarouselComponent, // Now standalone
        // AboutComponent, // Now standalone
        // NavbarComponent, // Now standalone
        // EncodeURI, // Now standalone
        // PrivacyComponent, // Now standalone
        // BuildComponent, // Now standalone
        // HomepageComponent, // Now standalone
        // SimpleRecipeListComponent, // Now standalone
        // StatsComponent, // Now standalone
        // FavouritesComponent, // Now standalone
        // MenuaboutComponent // Now standalone
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RecipeModule,
        RouterModule.forRoot(appRoutes, { enableTracing: false }),
        NgbModule,
        AppComponent, // Added as standalone
        CarouselComponent, // Added as standalone
        AboutComponent,    // Added as standalone
        NavbarComponent, // Added as standalone
        EncodeURI, // Added as standalone
        PrivacyComponent, // Added as standalone
        BuildComponent, // Added as standalone
        HomepageComponent, // Added as standalone
        SimpleRecipeListComponent, // Added as standalone
        StatsComponent, // Added as standalone
        FavouritesComponent, // Added as standalone
        MenuaboutComponent], providers: [provideHttpClient(withInterceptorsFromDi())] }) // Added as standalone
export class AppModule { }

