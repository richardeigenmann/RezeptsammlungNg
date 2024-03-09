import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutComponent,
    NavbarComponent,
    EncodeURI,
    PrivacyComponent,
    BuildComponent,
    HomepageComponent,
    SimpleRecipeListComponent,
    StatsComponent,
    FavouritesComponent,
    MenuaboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecipeModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    NgbModule,
  ],
  providers: [],
  exports:[
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

