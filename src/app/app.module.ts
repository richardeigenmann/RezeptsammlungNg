import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarouselComponent } from './home/carousel.component';
import { ProductModule } from './products/product.module';
import { AboutComponent } from './home/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncodeURI } from './shared/encodeUri.pipe';
import { CategoriesService } from './services/categories.service';
import { RecipeService } from './services/recipe.service';
import { RecipeSiteService } from './services/recipe-site.service';
import { PrivacyComponent } from './home/privacy/privacy.component';

const appRoutes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '', redirectTo: 'carousel', pathMatch: 'full' },
  { path: '**', redirectTo: 'carousel', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutComponent,
    NavbarComponent,
    EncodeURI,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    NgbModule.forRoot()
  ],
  providers: [
    RecipeService,
    CategoriesService,
    RecipeSiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

